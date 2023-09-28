import { Request, Response } from 'express';
import { scrapePageContent } from '../services/page-content.service';

export const index = async (req: Request, res: Response) => {
  const { targetUrl, optionalElements = [] } = req.body;

  const result = await scrapePageContent({ url: targetUrl, elementsToScrape: optionalElements });

  res.send({
    success: true,
    result: result,
  });
}
