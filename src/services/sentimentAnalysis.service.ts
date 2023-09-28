import { sadnessLexicon, loveLexicon, joyLexicon, fearLexicon, angerLexicon, surpriseLexicon } from './sentimentAnalysisKeywords';

interface ISentimentAnalysisScoreboard {
    [sadness: string]: number;
    love: number;
    joy: number;
    fear: number;
    anger: number;
    surprise: number;
}

interface ISentimentAnalysisResponse {
    scoreboard: ISentimentAnalysisScoreboard;
    sentiment: string;
    overallScore: number;
}

export const sentimentAnalysis = (text: string): ISentimentAnalysisResponse => {
    const words = text.toLowerCase().match(/\b(\w+)\b/g);

    if (!words) {
        throw new Error('No words found in the provided text.');
    }

    const scoreboard: ISentimentAnalysisScoreboard = {
        sadness: 0,
        love: 0,
        joy: 0,
        fear: 0,
        anger: 0,
        surprise: 0,
    };

    words.forEach((word: string) => {
        if (sadnessLexicon[word]) {
            scoreboard.sadness += sadnessLexicon[word];
        }

        if (loveLexicon[word]) {
            scoreboard.love += loveLexicon[word];
        }

        if (joyLexicon[word]) {
            scoreboard.joy += joyLexicon[word];
        }

        if (fearLexicon[word]) {
            scoreboard.fear += fearLexicon[word];
        }

        if (angerLexicon[word]) {
            scoreboard.anger += angerLexicon[word];
        }

        if (surpriseLexicon[word]) {
            scoreboard.surprise += surpriseLexicon[word];
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
    }
};