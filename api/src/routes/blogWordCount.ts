import { Router } from "express";
import { getBlogWordCount } from "../controllers/wordCount.controller";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

router.post('/', [
    body('targetUrl').notEmpty().isURL().withMessage('URL is required for word count'),
], validateRequest, getBlogWordCount);

export default router;
