import { Request, Response } from 'express';
import { scrapePageContent } from '../services/page-content.service';

export const index = async (req: Request, res: Response) => {
  try {
    const { targetUrl, optionalElements = [], attributes } = req.body;
    const filters = req.query;

    const result = await scrapePageContent(targetUrl, optionalElements);

    res.send({
      success: true,
      result: result,
    });
  } catch (error) {
    console.log(error)
    res.send({
      success: false,
      error: error,
    })
  }
}
