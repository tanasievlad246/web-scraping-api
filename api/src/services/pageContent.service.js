"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapePageContent = void 0;
const logger_1 = __importDefault(require("../logger"));
const puppeteer_1 = __importDefault(require("../puppeteer"));
const scrapePageContent = ({ url, elementsToScrape = [], extractAllText }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield (0, puppeteer_1.default)();
        const page = yield browser.newPage();
        yield page.goto(url, {
            waitUntil: 'networkidle0',
        });
        const data = yield page.evaluate((elementsToScrape, extractAllText) => {
            const formatScrapedElementsData = (elements) => {
                return Array.isArray(elements) ? elements.map((el) => ({
                    tagName: el.localName,
                    textContent: el.textContent,
                    attributes: el.getAttributeNames().map(attr => ({ [attr]: el.getAttribute(attr) })),
                })) : [];
            };
            const h3Elements = Array.from(document.querySelectorAll('h3'));
            const pElements = Array.from(document.querySelectorAll('p'));
            const allElements = Array.from(document.querySelectorAll('*'));
            const optionalElements = {};
            const elementCounts = {};
            let textFromPage = [];
            if (extractAllText) {
                textFromPage = formatScrapedElementsData(allElements).filter(el => !['html', 'meta', 'html', 'script'].includes(el.tagName));
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
                optionalElements,
                textFromPage,
            };
        }, elementsToScrape, extractAllText);
        browser.close();
        return data;
    }
    catch (error) {
        logger_1.default.error(error);
        throw error;
    }
});
exports.scrapePageContent = scrapePageContent;
