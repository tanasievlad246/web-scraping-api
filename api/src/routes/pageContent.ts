import { Router } from "express";
import { index } from "../controllers/pageContent.controller";
import { body } from 'express-validator';
import { validateRequest } from "../middleware/validateRequest";
const router = Router();

router.post("/", [
    body('targetUrl').notEmpty().isURL().withMessage('The targetUrl field must be a valid URL.'),
    body('optionalElements').optional().isArray({
        min: 1,
    }).withMessage('The optionalElements field must be an array of strings representing HTML tags'),
    body('extractAllText').optional().isBoolean().withMessage('The extractAllText field must be a boolean'),
], validateRequest, index);

export default router;
