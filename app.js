const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
const port = 3000;

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true, // Enable GraphiQL UI for testing queries
}));

// Swagger documentation endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/graphql`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});

/**
 * @swagger
 * /graphql:
 *   post:
 *     summary: Retrieve audiences based on different filters
 *     description: |
 *       Use this endpoint to query the `audiences` data.
 *       You can filter by any combination of the following parameters:
 *       - `name`: Filter by audience name.
 *       - `labelId`: Filter by label ID.
 *       - `visitorRetentionDays`: Filter by the number of visitor retention days.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 example: |
 *                   {
 *                     query1: audiences(name: "s") {
 *                       id
 *                       name
 *                       labelIds
 *                       visitorRetentionDays
 *                     }
 *                     query2: audiences(labelId: "550cd119-bbc5-4d7d-d2bf-8970a9653932") {
 *                       id
 *                       name
 *                       labelIds
 *                       visitorRetentionDays
 *                     }
 *                     query3: audiences(visitorRetentionDays: 30) {
 *                       id
 *                       name
 *                       labelIds
 *                       visitorRetentionDays
 *                     }
 *                     query4: audiences(labelId: "550cd119-bbc5-4d7d-d2bf-8970a9653932", visitorRetentionDays: 30) {
 *                       id
 *                       name
 *                       labelIds
 *                       visitorRetentionDays
 *                     }
 *                     query5: audiences(name: "s", labelId: "550cd119-bbc5-4d7d-d2bf-8970a9653932") {
 *                       id
 *                       name
 *                       labelIds
 *                       visitorRetentionDays
 *                     }
 *                     query6: audiences(name: "s", visitorRetentionDays: 30) {
 *                       id
 *                       name
 *                       labelIds
 *                       visitorRetentionDays
 *                     }
 *                     query7: audiences(name: "s", labelId: "550cd119-bbc5-4d7d-d2bf-8970a9653932", visitorRetentionDays: 30) {
 *                       id
 *                       name
 *                       labelIds
 *                       visitorRetentionDays
 *                     }
 *                   }
 *     responses:
 *       200:
 *         description: Successful response with audiences data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     audiences:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                           name:
 *                             type: string
 *                           labelIds:
 *                             type: array
 *                             items:
 *                               type: string
 *                           visitorRetentionDays:
 *                             type: integer
 *       400:
 *         description: Invalid query
 *       500:
 *         description: Server error
 */

