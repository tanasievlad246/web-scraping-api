import express, { Express, json } from 'express';
import pageContentRouter from './routes/page-content';

const app: Express = express();

app.use(json());

const prefix = '/api/v1';

app.use(`${prefix}/page-content`, pageContentRouter);

app.get('*', (req, res) => {
  res.status(404).send({
    message: 'Resource not found',
  });
});

export default app;