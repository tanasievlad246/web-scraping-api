import { Router } from 'express';
import { sentimentAnalysis } from '../controllers/sentimentAnalysis.controller';
import { validateRequest } from '../middleware/validateRequest';
import { body } from 'express-validator';

const router = Router();

router.post('/', [
    body('text').notEmpty().withMessage('Text is required for sentiment analysis'),
], validateRequest, sentimentAnalysis);

export default router;
