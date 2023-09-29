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
exports.getBlogWordCount = void 0;
const puppeteer_1 = __importDefault(require("../puppeteer"));
const getBlogWordCount = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield (0, puppeteer_1.default)();
        const page = yield browser.newPage();
        yield page.goto(url);
        let data = yield scrapeWordCounts(page);
        if (data.wordCount <= 2) {
            data = yield scrapeWordCounts(page);
        }
        yield browser.close();
        return data;
    }
    catch (error) {
        throw error;
    }
});
exports.getBlogWordCount = getBlogWordCount;
const scrapeWordCounts = (page) => __awaiter(void 0, void 0, void 0, function* () {
    return yield page.evaluate(() => {
        const elements = document.querySelectorAll('div, p, h1, h2, h3, h4, h5, span, a, li, td, th, article, section, blocquote, code, details');
        let text = '';
        elements.forEach((element) => {
            text += element.textContent + ' ';
        });
        const words = text.split(/\s+/);
        return { wordCount: words.length, text };
    });
});
