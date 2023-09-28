import { Request, Response } from "express";
import { sentimentAnalysis as sentimentAnalysisService } from "../services/sentimentAnalysis.service";
import { BadRequestError } from "../errors";

export const sentimentAnalysis = async (req: Request, res: Response) => {
    const { text } = req.body;

    try {
        const response = sentimentAnalysisService(text);

        res.status(200).send(response);
    } catch (error) {
        throw new BadRequestError(`${error}`);
    }
};