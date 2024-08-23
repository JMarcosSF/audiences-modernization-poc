// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Audience API',
            version: '1.0.0',
            description: 'API documentation for Audience management'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ],
        components: {
            schemas: {
                Audience: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        labelIds: { type: 'array', items: { type: 'string' } },
                        visitorRetentionDays: { type: 'integer' }
                    }
                },
                Pagination: {
                    type: 'object',
                    properties: {
                        totalItems: { type: 'integer' },
                        totalPages: { type: 'integer' },
                        currentPage: { type: 'integer' },
                        pageSize: { type: 'integer' },
                        hasNext: { type: 'boolean' },
                        hasPrevious: { type: 'boolean' },
                        items: { type: 'array', items: { $ref: '#/components/schemas/Audience' } }
                    }
                }
            }
        },
        paths: {
            '/audiences': {
                get: {
                    summary: 'Fetch Audiences',
                    parameters: [
                        {
                            name: 'name',
                            in: 'query',
                            schema: { type: 'string' },
                            required: false,
                            description: 'The name of the audience'
                        },
                        {
                            name: 'labelIds',
                            in: 'query',
                            schema: { type: 'array', items: { type: 'string' } },
                            required: false,
                            description: 'The list of label IDs associated with the audience'
                        },
                        {
                            name: 'visitorRetentionDays',
                            in: 'query',
                            schema: { type: 'integer' },
                            required: false,
                            description: 'The number of days for visitor retention'
                        },
                        {
                            name: 'page',
                            in: 'query',
                            schema: { type: 'integer' },
                            required: false,
                            description: 'The current page number being displayed'
                        },
                        {
                            name: 'pageSize',
                            in: 'query',
                            schema: { type: 'integer' },
                            required: false,
                            description: 'The number of items to display on each page'
                        }
                    ],
                    responses: {
                        200: {
                            description: 'A list of audiences with pagination',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Pagination' }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    apis: ['./app.js'], // Path to the file(s) containing the JSDoc comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };