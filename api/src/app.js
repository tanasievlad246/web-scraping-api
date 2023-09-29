"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const errorHandler_1 = require("./middleware/errorHandler");
const globalLogger_1 = require("./middleware/globalLogger");
const express_rate_limit_1 = require("express-rate-limit");
const pageContent_1 = __importDefault(require("./routes/pageContent"));
const sentimentAnalysis_1 = __importDefault(require("./routes/sentimentAnalysis"));
const blogWordCount_1 = __importDefault(require("./routes/blogWordCount"));
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
const app = (0, express_1.default)();
app.use((0, express_1.json)());
const prefix = '/api/v1/';
app.use(limiter);
app.use(globalLogger_1.globalLogger);
app.use(`${prefix}page-content`, pageContent_1.default);
app.use(`${prefix}sentiment-analysis`, sentimentAnalysis_1.default);
app.use(`${prefix}blog-word-count`, blogWordCount_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
