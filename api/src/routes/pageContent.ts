import { Router } from "express";
import { index } from "../controllers/pageContent.controller";
import { body } from 'express-validator';
import { validateRequest } from "../middleware/validateRequest";
const router = Router();

/**
 * @swagger
 * /api/v1/page-content:
 *  post:
 *   tags:
 *    - Page Content Extraction
 *   summary: Get tags and text from a web page
 *   description: Get tags and text from a web page, default scrapes all p tags and h3 tags from the page
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
 *        optionalElements:
 *         required: false
 *         type: array
 *         items:
 *          type: string
 *          example: h1, h2, h3
 *        extractAllText:
 *         required: false
 *         type: boolean
 *   responses:
 *    200:
 *     description: JSON object containing data regarding the scraping of content
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         success:
 *          type: boolean
 *          example: true
 *         result:
 *          type: object
 *          properties:
 *           elementCounts:
 *            type: object
 *            properties:
 *             tagName:
 *              type: number
 *              example: 1
 *            example: { "h1": 1, "h2": 2 }
 *         h3:
 *          type: array
 *          items:
 *           type: object
 *           properties:
 *            tagName:
 *             type: string
 *             example: h3
 *            textContent:
 *             type: string
 *             example: This is a h3 tag
 *            attributes:
 *             type: array
 *             items:
 *              type: object
 *              properties:
 *               attribute:
 *                type: string
 *              example: { "class": "example-class" }
 *         p:
 *          type: array
 *          items:
 *           type: object
 *           properties:
 *            tagName:
 *             type: string
 *             example: p
 *            textContent:
 *             type: string
 *             example: This is a p tag
 *            attributes:
 *             type: array
 *             items:
 *              type: object
 *              properties:
 *               attribute:
 *                type: string
 *              example: { "class": "example-class" }
 *         optionalElements:
 *          type: object
 *          properties:
 *           tagName:
 *            type: array
 *            items:
 *             type: object
 *             properties:
 *              tagName:
 *               type: string
 *               example: h3
 *              textContent:
 *               type: string
 *               example: This is a h3 tag
 *              attributes:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                 attribute:
 *                  type: string
 *                example: { "class": "example-class" }
 *         textFromPage:
 *          type: array
 *          items:
 *           type: object
 *           properties:
 *            tagName:
 *             type: string
 *             example: div
 *            textContent:
 *             type: string
 *             example: This is a div tag
 *            attributes:
 *             type: array
 *             items:
 *              type: object
 *              properties:
 *               attribute:
 *                type: string
 *              example: { "id": "someId" }
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
router.post("/", [
    body('targetUrl').notEmpty().isURL().withMessage('The targetUrl field must be a valid URL.'),
    body('optionalElements').optional().isArray().withMessage('The optionalElements field must be an array of strings representing HTML tags'),
    body('extractAllText').optional().isBoolean().withMessage('The extractAllText field must be a boolean'),
], validateRequest, index);

export default router;
