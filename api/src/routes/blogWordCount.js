"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wordCount_controller_1 = require("../controllers/wordCount.controller");
const express_validator_1 = require("express-validator");
const validateRequest_1 = require("../middleware/validateRequest");
const router = (0, express_1.Router)();
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
    (0, express_validator_1.body)('targetUrl').notEmpty().isURL().withMessage('URL is required for word count'),
], validateRequest_1.validateRequest, wordCount_controller_1.getBlogWordCount);
exports.default = router;
