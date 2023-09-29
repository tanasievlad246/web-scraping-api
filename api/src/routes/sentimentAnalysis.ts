import { Router } from 'express';
import { sentimentAnalysis } from '../controllers/sentimentAnalysis.controller';
import { validateRequest } from '../middleware/validateRequest';
import { body } from 'express-validator';

const router = Router();

/**
 * @swagger
 * /api/v1/sentiment-analysis:
 *  post:
 *   tags:
 *    - Sentiment Analysis
 *   summary: Get sentiment analysis of a the text on a web page
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        targetUrl:
 *         type: string
 *         required: true
 *         example: https://www.example.com
 *   responses:
 *    200:
 *     description: JSON object containing data regarding the sentiment analysis. Contains the scores of multiple feelings (sadness, love, joy, fear, anger, surprise) along with an overall score and sentiment.
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         scoreboard:
 *          type: object
 *          properties:
 *           sadness:
 *            type: number
 *            example: 1
 *           love:
 *            type: number
 *            example: 1
 *           joy:
 *            type: number
 *            example: 1
 *           fear:
 *            type: number
 *            example: 1
 *           anger:
 *            type: number
 *            example: 1
 *           surprise:
 *            type: number
 *            example: 1
 *         overall:
 *          type: number
 *          example: 6
 *         sentiment:
 *          type: string
 *          example: neutral
 */
router.post('/', [
    body('targetUrl').notEmpty().isURL().withMessage('Target url is required for sentiment analysis'),
], validateRequest, sentimentAnalysis);

export default router;
