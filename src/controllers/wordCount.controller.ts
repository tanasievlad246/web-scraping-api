import { NextFunction, Request, Response } from "express";
import { getBlogWordCount as getBlogWordCountFunction } from "../services/wordCount.service";

export const getBlogWordCount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { targetUrl } = req.body;

        const wordCount = await getBlogWordCountFunction(targetUrl);

        res.send({
            wordCount,
        });
    } catch (error) {
        next(error);
    }
}
