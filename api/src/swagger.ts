import { Application, Request, Response } from 'express';
import logger from './logger';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Web Scraper API',
            version: '1.0.0',
            description: 'Web Scraper API',
        },
    }
}

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: Application, port: number) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    logger.info(`Swagger docs available at http://localhost:${port}/api/v1/docs`);
};