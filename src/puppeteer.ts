import puppeteer, { Browser } from "puppeteer";
import dotenv from "dotenv";

/**
 * @description - Configures a puppeteer browser instance with the scraperapi proxy server
 */
const configuredPuppeteerBrowser = async (): Promise<Browser> => {
    try {
        dotenv.config();
        const { SCRAPER_API_KEY } = process.env;

        const proxyServerUrl = `http://scraperapi:${SCRAPER_API_KEY}@proxy-server.scraperapi.com:8001`
        // implement silent launch
        const browser = await puppeteer.launch({
            args: [
                // `--proxy-server=${proxyServerUrl}`
            ],
        });

        return browser;
    } catch (error) {
       console.log(error)
       return Promise.reject(error);
    }
};

export default configuredPuppeteerBrowser;
