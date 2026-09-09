export const EventsReplayBatchGqlTypeDefs = `
  type EventsReplayBatch {
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
    getEventsReplayBatch(id: ID!): EventsReplayBatch
    listEventsReplayBatchs(tenantId: String!, limit: Int): [EventsReplayBatch!]!
  }

  extend type Mutation {
    createEventsReplayBatch(tenantId: String!, code: String!, name: String!): EventsReplayBatch!
    deleteEventsReplayBatch(id: ID!): Boolean!
  }
`;

export const EventsReplayBatchGqlResolvers = {
  Query: {
    getEventsReplayBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
