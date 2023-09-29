import { Page } from "puppeteer";
import configuredPuppeteerBrowser from "../puppeteer";

export const getBlogWordCount = async (url: string): Promise<{ wordCount: number, text: string }> => {
    try {
        const browser = await configuredPuppeteerBrowser();
        const page = await browser.newPage();
        await page.goto(url);

        let data = await scrapeWordCounts(page);

        if (data.wordCount <= 2) {
            data = await scrapeWordCounts(page);
        }

        await browser.close();
        return data;
    } catch (error) {
        throw error;
    }
}

const scrapeWordCounts = async (page: Page) => {
    return await page.evaluate(() => {
        const elements = document.querySelectorAll('div, p, h1, h2, h3, h4, h5, span, a, li, td, th, article, section, blocquote, code, details');
        let text = '';
        elements.forEach((element) => {
            text += element.textContent + ' ';
        });
        const words = text.split(/\s+/);

        return { wordCount: words.length, text };
    });
}
