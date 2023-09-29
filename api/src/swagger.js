"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const logger_1 = __importDefault(require("./logger"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const package_json_1 = require("../package.json");
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Web Scraper API',
            version: package_json_1.version,
            description: 'Web Scraper API',
        },
    },
    components: {
        securitySchemas: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        }
    ],
    apis: ['./src/routes/**/*{.ts,.js}'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    logger_1.default.info(`Swagger docs available at http://localhost:${port}/api/v1/docs`);
};
exports.swaggerDocs = swaggerDocs;
