import express, { Express, json } from 'express';
import { errorHandler } from './middleware/errorHandler';
import { globalLogger } from './middleware/globalLogger';
import { rateLimit } from 'express-rate-limit'

import pageContentRouter from './routes/pageContent';
import sentimentAnalysisRouter from './routes/sentimentAnalysis';
import getBlogWordCountRouter from './routes/blogWordCount';

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-7',
	legacyHeaders: false,
})

const app: Express = express();

app.use(json());

const prefix = '/api/v1/';

app.use(limiter);
app.use(globalLogger);

app.use(`${prefix}page-content`, pageContentRouter);
app.use(`${prefix}sentiment-analysis`, sentimentAnalysisRouter);
app.use(`${prefix}blog-word-count`, getBlogWordCountRouter);

app.use(errorHandler);

export default app;
