// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node Modernization PoC API',
            version: '1.0.0',
            description: 'API documentation for Node Modernization PoC',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Your server URL
            },
        ],
    },
    apis: ['./app.js'], // Path to the file(s) containing the JSDoc comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
