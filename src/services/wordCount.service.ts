import configuredPuppeteerBrowser from "../puppeteer";

const nonTextTags = "script,link,meta,style,img,input,button,br,hr,area,iframe,base,embed,object,param,track,wbr,source,colgroup,col,link";

export const getBlogWordCount = async (url: string): Promise<number> => {
    try {
        const browser = await configuredPuppeteerBrowser();
        const page = await browser.newPage();

        await page.goto(url, { waitUntil: 'domcontentloaded' });

        let wordCount = 0;

        const data = await page.evaluate((wordCount, nonTextTags) => {
            const allData = Array.from(document.querySelectorAll('div')).filter(el => !nonTextTags.split(',').includes(el.localName));
            allData.forEach(el => {
                const textContent = el.textContent;
                if (textContent) {
                    wordCount += textContent.length;
                }
            });
            return {
                wordCount,
                allData,
            };
        }, wordCount, nonTextTags);

        console.log(data);

        return Promise.resolve(0);
    } catch (error) {
        return Promise.reject(error);
    }
}
