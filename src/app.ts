import express, { Express, json } from 'express';
import pageContentRouter from './routes/page-content';
import { errorHandler } from './middleware/errorHandler';
import { globalLogger } from './middleware/globalLogger';

const app: Express = express();

app.use(json());

const prefix = '/api/v1';

app.use(globalLogger);

app.use(`${prefix}/page-content`, pageContentRouter);

app.get('*', (req, res) => {
  res.status(404).send({
    message: 'Resource not found',
  });
});

app.use(errorHandler);

export default app;