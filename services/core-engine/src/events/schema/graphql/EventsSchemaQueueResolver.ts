export const EventsSchemaQueueGqlTypeDefs = `
  type EventsSchemaQueue {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getEventsSchemaQueue(id: ID!): EventsSchemaQueue
    listEventsSchemaQueues(tenantId: String!, limit: Int): [EventsSchemaQueue!]!
  }

  extend type Mutation {
    createEventsSchemaQueue(tenantId: String!, code: String!, name: String!): EventsSchemaQueue!
    deleteEventsSchemaQueue(id: ID!): Boolean!
  }
`;

export const EventsSchemaQueueGqlResolvers = {
  Query: {
    getEventsSchemaQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
