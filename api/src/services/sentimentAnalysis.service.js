"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentimentAnalysis = void 0;
const sentimentAnalysisKeywords_1 = require("./sentimentAnalysisKeywords");
const sentimentAnalysis = (text) => {
    const words = text.toLowerCase().match(/\b(\w+)\b/g);
    if (!words) {
        throw new Error('No words found in the provided text.');
    }
    const scoreboard = {
        sadness: 0,
        love: 0,
        joy: 0,
        fear: 0,
        anger: 0,
        surprise: 0,
    };
    words.forEach((word) => {
        if (sentimentAnalysisKeywords_1.sadnessLexicon[word]) {
            scoreboard.sadness += sentimentAnalysisKeywords_1.sadnessLexicon[word];
        }
        if (sentimentAnalysisKeywords_1.loveLexicon[word]) {
            scoreboard.love += sentimentAnalysisKeywords_1.loveLexicon[word];
        }
        if (sentimentAnalysisKeywords_1.joyLexicon[word]) {
            scoreboard.joy += sentimentAnalysisKeywords_1.joyLexicon[word];
        }
        if (sentimentAnalysisKeywords_1.fearLexicon[word]) {
            scoreboard.fear += sentimentAnalysisKeywords_1.fearLexicon[word];
        }
        if (sentimentAnalysisKeywords_1.angerLexicon[word]) {
            scoreboard.anger += sentimentAnalysisKeywords_1.angerLexicon[word];
        }
        if (sentimentAnalysisKeywords_1.surpriseLexicon[word]) {
            scoreboard.surprise += sentimentAnalysisKeywords_1.surpriseLexicon[word];
        }
    });
    let maxSentiment = 'neutral';
    let maxScore = 0;
    for (const sentiment in scoreboard) {
        if (scoreboard[sentiment] > maxScore) {
            maxScore = scoreboard[sentiment];
            maxSentiment = sentiment;
        }
    }
    return {
        scoreboard,
        overallScore: maxScore,
        sentiment: maxSentiment,
    };
};
exports.sentimentAnalysis = sentimentAnalysis;
