const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean } = require('graphql');

// Sample data
const data = [
    {
        "id": "qcarlin_main_179",
        "name": "Audience with function",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"badges.5020\",\"operand2\":null,\"operator\":\"does_not_exist\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 0,
        "createdByPlay": [],
        "labelIds": [],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user1@tealium.com",
        "creationDate": "2024-07-23T12:25:33.444Z",
        "updatedBy": "user1@tealium.com",
        "updatedDate": "2024-07-23T12:25:33.444Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_180",
        "name": "Save Seg for Reuse",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"id\":1830,\"type\":\"segment\",\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"badges.5014\",\"operand2\":null,\"operator\":\"exists\"},{\"operand1\":\"badges.5020\",\"operand2\":null,\"operator\":\"exists\"}]},{\"id\":1830,\"type\":\"segment\",\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"badges.5014\",\"operand2\":null,\"operator\":\"exists\"},{\"operand1\":\"badges.5020\",\"operand2\":null,\"operator\":\"exists\"}]}]},{\"id\":1830,\"type\":\"segment\",\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"badges.5014\",\"operand2\":null,\"operator\":\"exists\"},{\"operand1\":\"badges.5020\",\"operand2\":null,\"operator\":\"exists\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 0,
        "createdByPlay": [],
        "labelIds": [],
        "editable": true,
        "audienceDBEnabled": false,
        "createdBy": "user1@tealium.com",
        "creationDate": "2024-07-29T15:01:16.697Z",
        "updatedBy": "user1@tealium.com",
        "updatedDate": "2024-07-29T15:01:16.697Z",
        "segmentsIds": [
            1830
        ],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_177",
        "name": "Second Activation",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"badges.5014\",\"operand2\":null,\"operator\":\"does_not_exist\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 0,
        "createdByPlay": [],
        "labelIds": [
            "5505666f-0383-4d09-a56a-c79d92f6c6e5",
            "550cd119-bbc5-4d7d-d2bf-8970a9653932"
        ],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user1@tealium.com",
        "creationDate": "2024-06-07T18:08:58.593Z",
        "updatedBy": "user1@tealium.com",
        "updatedDate": "2024-07-22T13:32:32.881Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_102",
        "name": "Test seg in aud",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"dates.23\",\"operand2\":null,\"operator\":\"IS_ASSIGNED\"}]},{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"flags.5006\",\"operand2\":null,\"operator\":\"is_true\"}]}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 30,
        "createdByPlay": [],
        "labelIds": [
            "550cd119-bbc5-4d7d-d2bf-8970a9653932"
        ],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user1@tealium.com",
        "creationDate": "2024-01-12T20:57:23.532Z",
        "updatedBy": "user1@tealium.com",
        "updatedDate": "2024-02-21T18:56:37.225Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_103",
        "name": "Sample Audience",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"dates.23\",\"operand2\":null,\"operator\":\"IS_ASSIGNED\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 30,
        "createdByPlay": [],
        "labelIds": [
            "550cd119-bbc5-4d7d-d2bf-8970a9653932"
        ],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user2@tealium.com",
        "creationDate": "2024-02-12T20:57:23.532Z",
        "updatedBy": "user2@tealium.com",
        "updatedDate": "2024-03-21T18:56:37.225Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_104",
        "name": "Another Audience",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"dates.23\",\"operand2\":null,\"operator\":\"IS_ASSIGNED\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 30,
        "createdByPlay": [],
        "labelIds": [],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user3@tealium.com",
        "creationDate": "2024-03-12T20:57:23.532Z",
        "updatedBy": "user3@tealium.com",
        "updatedDate": "2024-04-21T18:56:37.225Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_105",
        "name": "Sample Audience S",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"dates.23\",\"operand2\":null,\"operator\":\"IS_ASSIGNED\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 30,
        "createdByPlay": [],
        "labelIds": [
            "550cd119-bbc5-4d7d-d2bf-8970a9653932"
        ],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user4@tealium.com",
        "creationDate": "2024-04-12T20:57:23.532Z",
        "updatedBy": "user4@tealium.com",
        "updatedDate": "2024-05-21T18:56:37.225Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_106",
        "name": "Audience S",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"dates.23\",\"operand2\":null,\"operator\":\"IS_ASSIGNED\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 30,
        "createdByPlay": [],
        "labelIds": [],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user5@tealium.com",
        "creationDate": "2024-05-12T20:57:23.532Z",
        "updatedBy": "user5@tealium.com",
        "updatedDate": "2024-06-21T18:56:37.225Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    },
    {
        "id": "qcarlin_main_107",
        "name": "New Audience for Query8",
        "logic": "{\"conditionBlocks\":[{\"blockOperator\":\"and\",\"blockExpression\":[{\"operand1\":\"dates.23\",\"operand2\":null,\"operator\":\"IS_ASSIGNED\"}]},{\"blockOperator\":\"not\",\"blockExpression\":[]}]}",
        "perspective": "badges",
        "visitorRetentionDays": 30,
        "createdByPlay": [],
        "labelIds": [
            "550cd119-bbc5-4d7d-d2bf-8970a9653932",
            "5505666f-0383-4d09-a56a-c79d92f6c6e5"
        ],
        "editable": true,
        "audienceDBEnabled": true,
        "createdBy": "user6@tealium.com",
        "creationDate": "2024-08-12T20:57:23.532Z",
        "updatedBy": "user6@tealium.com",
        "updatedDate": "2024-09-21T18:56:37.225Z",
        "segmentsIds": [],
        "start": null,
        "end": null,
        "notes": ""
    }
];

// Define the AudienceType
const AudienceType = new GraphQLObjectType({
    name: 'Audience',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        logic: { type: GraphQLString },
        perspective: { type: GraphQLString },
        visitorRetentionDays: { type: GraphQLInt },
        createdByPlay: { type: new GraphQLList(GraphQLString) },
        labelIds: { type: new GraphQLList(GraphQLString) },
        editable: { type: GraphQLBoolean },
        audienceDBEnabled: { type: GraphQLBoolean },
        createdBy: { type: GraphQLString },
        creationDate: { type: GraphQLString },
        updatedBy: { type: GraphQLString },
        updatedDate: { type: GraphQLString },
        segmentsIds: { type: new GraphQLList(GraphQLInt) },
        start: { type: GraphQLString },
        end: { type: GraphQLString },
        notes: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        audiences: {
            type: new GraphQLList(AudienceType),
            args: {
                name: { type: GraphQLString },
                labelIds: { type: new GraphQLList(GraphQLString) },
                visitorRetentionDays: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return data.filter(audience => {
                    let matches = true;
                    if (args.name) {
                        matches = matches && audience.name.includes(args.name);
                    }
                    if (args.labelIds && args.labelIds.length > 0) {
                        matches = matches && args.labelIds.every(labelId => audience.labelIds.includes(labelId));
                    }
                    if (args.visitorRetentionDays !== undefined) {
                        matches = matches && audience.visitorRetentionDays === args.visitorRetentionDays;
                    }
                    return matches;
                });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});