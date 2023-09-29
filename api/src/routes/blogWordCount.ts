import { Router } from "express";
import { getBlogWordCount } from "../controllers/wordCount.controller";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validateRequest";

const router = Router();

/**
 * @swagger
 * /api/v1/blog-word-count:
 *  post:
 *   tags:
 *    - Blog Word Count
 *   summary: Get word count of a blog
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        targetUrl:
 *         type: string
 *   responses:
 *    200:
 *     description: JSON object containing word count and counted text
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         wordCount:
 *          type: number
 *          example: 9
 *         text:
 *          type: string
 *          example: The quick brown forx jumps over the lazy dog
 *    400:
 *     description: Bad request
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *          errors:
 *           type: array
 *           items:
 *            type: object
 *            properties:
 *             message:
 *              type: string
 *              example: URL is required for word count
 *             type:
 *              type: string
 *              example: field
 *             completeError:
 *              type: object
 *              example: { "type": "field", "value": 123, "msg": "URL is required for word count", "path": "targetUrl", "location": "body" }
 */
router.post('/', [
    body('targetUrl').notEmpty().isURL().withMessage('URL is required for word count'),
], validateRequest, getBlogWordCount);

export default router;
