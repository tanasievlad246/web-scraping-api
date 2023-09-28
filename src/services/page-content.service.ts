import configuredPuppeteerBrowser from '../puppeteer';

interface IScrapePageContent {
    url: string;
    elementsToScrape?: string[];
}

interface IScrapePageContentResponse {
    h3: IScrapedElement[];
    p: IScrapedElement[];
    optionalElements: Record<string,IScrapedElement[]>;
}

interface IScrapedElement {
    textContent: (string | null);
    href: (string | null);
    attributes: string[];
    classes: (string | null);
}

export const scrapePageContent = async({ url, elementsToScrape = [] }: IScrapePageContent): Promise<IScrapePageContentResponse> => {
    try {
        const browser = await configuredPuppeteerBrowser();
        const page  = await browser.newPage();
        await page.goto(url, {
            waitUntil: 'networkidle0',
        });

        const data = await page.evaluate((elementsToScrape) => {
            const h3Elements = Array.from(document.querySelectorAll('h3'));
            const pElements = Array.from(document.querySelectorAll('p'));

            const optionalElements: Record<string,IScrapedElement[]> = {};
            const elementCounts: Record<string,number> = {};

            if (elementsToScrape.length > 0) {
                elementsToScrape.forEach(el => {
                    const elements = Array.from(document.querySelectorAll(el));

                    optionalElements[el] = elements.map(el => ({
                        textContent: el.textContent,
                        href: el.getAttribute('href'),
                        attributes: el.getAttributeNames(),
                        classes: el.getAttribute('class')
                    }));
                    elementCounts[el] = elements.length;
                });
            }

            elementCounts['h3'] = h3Elements.length;
            elementCounts['p'] = pElements.length;

            return {
                elementCounts,
                h3: h3Elements.map(el => ({
                    textContent: el.textContent,
                    href: el.getAttribute('href'),
                    attributes: el.getAttributeNames(),
                    classes: el.getAttribute('class'),
                })),
                p: pElements.map(el => ({
                    textContent: el.textContent,
                    href: el.getAttribute('href'),
                    attributes: el.getAttributeNames(),
                    classes: el.getAttribute('class'),
                })),
                optionalElements
            };
        }, elementsToScrape);

        browser.close();
        return data;
    } catch (error) {
        throw error;
    }
}

const formatScrapedElementsData = (elements: NodeListOf<Element> | Element[]) => {
    return Array.from(elements).map(el => ({
        textContent: el.textContent,
        href: el.getAttribute('href'),
        attributes: el.getAttributeNames(),
        classes: el.getAttribute('class'),
    }));
};
