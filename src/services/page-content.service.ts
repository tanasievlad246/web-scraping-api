import configuredPuppeteerBrowser from '../puppeteer';

export const scrapePageContent = async (
    url: string,
    attributes: any,
    elementsToScrape: string[] = []
): Promise<{
    h3: (string | null)[],
    p: (string | null)[]
}> => {
    try {
        const browser = await configuredPuppeteerBrowser();
        const page  = await browser.newPage();
        await page.goto(url, {
            waitUntil: 'networkidle0',
        });

        const data = await page.evaluate(() => {
            const h3Elements = Array.from(document.querySelectorAll('h3'));
            const pElements = Array.from(document.querySelectorAll('p'));

            const optionalElements: {
                [key: string]: (string|null)[]
            } = {};

            if (elementsToScrape.length > 0) {
                elementsToScrape.forEach(el => {
                    const element = Array.from(document.querySelectorAll(el));
                    optionalElements[el] = element.map(el => el.textContent);
                })
            }

            return {
                h3: h3Elements.map(el => el.textContent),
                p: pElements.map(el => el.textContent),
                optionalElements
            };
        });

        browser.close();
        return data;
    } catch (error) {
        throw error;
    }
}
