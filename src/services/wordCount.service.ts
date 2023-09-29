import configuredPuppeteerBrowser from "../puppeteer";

export const getBlogWordCount = async (url: string): Promise<number> => {
    try {
        const browser = await configuredPuppeteerBrowser();
        const page = await browser.newPage();
        await page.goto(url);

        const wordCount = await page.evaluate(() => {
            const elements = document.querySelectorAll('div, p, h1, h2, h3, h4, h5, span, a, li, td, th, article, section, blocquote, code, details');
            let text = '';
            elements.forEach((element) => {
                text += element.textContent + ' ';
            });
            const words = text.split(/\s+/);

            return words.length;
       });

        await browser.close();
        return wordCount;
    } catch (error) {
        throw error;
    }
}
