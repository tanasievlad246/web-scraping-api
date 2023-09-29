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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentimentAnalysis = void 0;
const sentimentAnalysis_service_1 = require("../services/sentimentAnalysis.service");
const errors_1 = require("../errors");
const wordCount_service_1 = require("../services/wordCount.service");
const sentimentAnalysis = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { targetUrl } = req.body;
    try {
        const { text } = yield (0, wordCount_service_1.getBlogWordCount)(targetUrl);
        const response = (0, sentimentAnalysis_service_1.sentimentAnalysis)(text);
        res.status(200).send(response);
    }
    catch (error) {
        throw new errors_1.BadRequestError(`${error}`);
    }
});
exports.sentimentAnalysis = sentimentAnalysis;
