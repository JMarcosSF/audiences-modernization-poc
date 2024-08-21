# Project Name

## Description
Brief description of the project.

## Prerequisites
- Node.js (version X.X.X)
- npm (version X.X.X)

## Installation
1. Clone the repository:
    ```sh
    git clone git@github.com:JMarcosSF/audiences-modernization-poc.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Project
1. Start the development server:
    ```sh
    node app.js
    ```
2. Open your browser and navigate to:
   - GraphQL endpoint: [http://localhost:3000/graphql/](http://localhost:3000/graphql/)
   - Swagger documentation: [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)

## Running Tests
1. Run the tests:
    ```sh
    npm test
    ```

## Building the Project
1. Build the project for production:
    ```sh
    npm run build
    ```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## Example GraphQL Queries

To test the GraphQL API, you can use the following queries:

```graphql
{
  query1: audiences {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query2: audiences(name: "s") {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query3: audiences(labelIds: ["550cd119-bbc5-4d7d-d2bf-8970a9653932"]) {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query4: audiences(labelIds: ["550cd119-bbc5-4d7d-d2bf-8970a9653932", "5505666f-0383-4d09-a56a-c79d92f6c6e5"]) {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query5: audiences(visitorRetentionDays: 30) {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query6: audiences(name: "s", labelIds: ["550cd119-bbc5-4d7d-d2bf-8970a9653932"]) {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query7: audiences(name: "s", visitorRetentionDays: 30) {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query8: audiences(labelIds: ["550cd119-bbc5-4d7d-d2bf-8970a9653932", "5505666f-0383-4d09-a56a-c79d92f6c6e5"], visitorRetentionDays: 30) {
    id
    name
    labelIds
    visitorRetentionDays
  }
  query9: audiences(name: "s", labelIds: ["550cd119-bbc5-4d7d-d2bf-8970a9653932"], visitorRetentionDays: 30) {
    id
    name
    labelIds
    visitorRetentionDays
  }
}