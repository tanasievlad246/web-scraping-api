import { Express, Request, Response } from 'express';
import logger from './logger';
import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../package.json';

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Web Scraper API',
            version,
            description: 'Web Scraper API',
        },
    },
    components: {
        securitySchemas: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        }
    ],
    apis: ['./src/routes/**/*{.ts,.js}'],
}

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: Express, port: number | string) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    logger.info(`Swagger docs available at http://localhost:${port}/api/v1/docs`);
};
