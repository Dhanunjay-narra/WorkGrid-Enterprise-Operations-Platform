export const EventsOutboxBatchGqlTypeDefs = `
  type EventsOutboxBatch {
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
    getEventsOutboxBatch(id: ID!): EventsOutboxBatch
    listEventsOutboxBatchs(tenantId: String!, limit: Int): [EventsOutboxBatch!]!
  }

  extend type Mutation {
    createEventsOutboxBatch(tenantId: String!, code: String!, name: String!): EventsOutboxBatch!
    deleteEventsOutboxBatch(id: ID!): Boolean!
  }
`;

export const EventsOutboxBatchGqlResolvers = {
  Query: {
    getEventsOutboxBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
