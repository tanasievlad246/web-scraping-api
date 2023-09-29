import { Request, Response } from "express";
import { sentimentAnalysis as sentimentAnalysisService } from "../services/sentimentAnalysis.service";
import { BadRequestError } from "../errors";
import { getBlogWordCount } from "../services/wordCount.service";

export const sentimentAnalysis = async (req: Request, res: Response) => {
    const { targetUrl } = req.body;

    try {
        const { text } = await getBlogWordCount(targetUrl);
        const response = sentimentAnalysisService(text);

        res.status(200).send(response);
    } catch (error) {
        throw new BadRequestError(`${error}`);
    }
};