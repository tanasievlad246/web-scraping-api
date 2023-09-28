import { Request, Response } from 'express';

class PageContentController {
  public async index(req: Request, res: Response) {
    res.send({
      message: 'Hello world',
    });
  }
}

export default new PageContentController();
