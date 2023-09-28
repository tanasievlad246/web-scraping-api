import { Result } from 'express-validator';
import configuredPuppeteerBrowser from '../puppeteer';

interface IScrapePageContent {
    url: string;
    elementsToScrape?: string[];
    extractAllText?: boolean;
}

interface IScrapePageContentResponse {
    h3: IScrapedElement[];
    p: IScrapedElement[];
    optionalElements: Record<string,IScrapedElement[]>;
}

interface IScrapedElement {
    textContent: (string | null);
    attributes: { [x: string]: any; };
    classes: (string | null);
}

interface IElementTextData {
    tagName: string;
    textContent: string;
    link: string;
}

export const scrapePageContent = async({ url, elementsToScrape = [], extractAllText = false }: IScrapePageContent): Promise<IScrapePageContentResponse> => {
    try {
        const browser = await configuredPuppeteerBrowser();
        const page  = await browser.newPage();
        await page.goto(url, {
            waitUntil: 'networkidle0',
        });

        const data = await page.evaluate((elementsToScrape, extractAllText) => {
            const formatScrapedElementsData = (elements: Iterable<Element> | ArrayLike<Element>) => {
                return Array.isArray(elements) ? elements.map((el: Element) => ({
                    textContent: el.textContent,
                    attributes: el.getAttributeNames().map(attr => ({ [attr]: el.getAttribute(attr) })),
                    classes: el.getAttribute('class')
                })) : [];
            };

            const h3Elements = Array.from(document.querySelectorAll('h3'));
            const pElements = Array.from(document.querySelectorAll('p'));
            const allElements = document.querySelectorAll('*');

            const optionalElements: Record<string,IScrapedElement[]> = {};
            const elementCounts: Record<string,number> = {};
            let textFromPage: IElementTextData[];

            if (extractAllText) {
                textFromPage = Array.isArray(allElements) ? allElements.map((element) => {
                    const tagName = element.tagName.toLowerCase();
                    const textContent = element.textContent;
                    let link = null;

                    const elementAttributes = element.getAttributeNames();

                    if (elementAttributes.includes('href')) {
                        link = element.getAttribute('href');
                    }

                    return {
                        tagName,
                        textContent,
                        link,
                    }
                }) : [];
            }

            if (elementsToScrape.length > 0) {
                elementsToScrape.forEach(el => {
                    const elements = Array.from(document.querySelectorAll(el));

                    optionalElements[el] = formatScrapedElementsData(elements),
                    elementCounts[el] = elements.length;
                });
            }

            elementCounts['h3'] = h3Elements.length;
            elementCounts['p'] = pElements.length;

            return {
                elementCounts,
                h3: formatScrapedElementsData(h3Elements),
                p: formatScrapedElementsData(pElements),
                optionalElements
            };
        }, elementsToScrape, extractAllText);

        browser.close();
        return data;
    } catch (error) {
        throw error;
    }
};
