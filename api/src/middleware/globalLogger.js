"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalLogger = void 0;
const logger_1 = __importDefault(require("../logger"));
const globalLogger = (req, res, next) => {
    const body = req.body ? JSON.stringify(req.body) : '';
    const query = req.query ? JSON.stringify(req.query) : '';
    const date = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    logger_1.default.info(`[${req.method}] [${req.url}] [${date}] ${body} ${query}`);
    next();
};
exports.globalLogger = globalLogger;
