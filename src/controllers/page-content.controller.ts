import { Request, Response } from 'express';
import { scrapePageContent } from '../services/page-content.service';
import logger from '../logger';

export const index = async (req: Request, res: Response) => {
  const { targetUrl, optionalElements = [], extractAllText } = req.body;

  const result = await scrapePageContent({ url: targetUrl, elementsToScrape: optionalElements, extractAllText });

  res.send({
    success: true,
    result: result,
  });
}
