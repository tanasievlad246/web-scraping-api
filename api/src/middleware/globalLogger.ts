import { NextFunction, Response, Request } from "express";
import logger from "../logger";

export const globalLogger = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body ? JSON.stringify(req.body) : '';
    const query = req.query ? JSON.stringify(req.query) : '';
    const date = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    logger.info(`[${req.method}] [${req.url}] [${date}] ${body} ${query}`);
    next();
}