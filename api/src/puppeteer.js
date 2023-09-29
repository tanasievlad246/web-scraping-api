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
const puppeteer_1 = __importDefault(require("puppeteer"));
const dotenv_1 = __importDefault(require("dotenv"));
const errors_1 = require("./errors");
/**
 * @description - Configures a puppeteer browser instance with the scraperapi proxy server
 */
const configuredPuppeteerBrowser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        dotenv_1.default.config();
        const { SCRAPER_API_KEY } = process.env;
        const proxyServerUrl = `http://scraperapi:${SCRAPER_API_KEY}@proxy-server.scraperapi.com:8001`;
        // implement silent launch
        const browser = yield puppeteer_1.default.launch({
            args: [
            // `--proxy-server=${proxyServerUrl}`
            ],
        });
        return browser;
    }
    catch (error) {
        throw new errors_1.BadRequestError('Error configuring puppeteer browser');
    }
});
exports.default = configuredPuppeteerBrowser;
