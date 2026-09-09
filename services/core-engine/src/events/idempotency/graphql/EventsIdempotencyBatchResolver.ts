export const EventsIdempotencyBatchGqlTypeDefs = `
  type EventsIdempotencyBatch {
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
    getEventsIdempotencyBatch(id: ID!): EventsIdempotencyBatch
    listEventsIdempotencyBatchs(tenantId: String!, limit: Int): [EventsIdempotencyBatch!]!
  }

  extend type Mutation {
    createEventsIdempotencyBatch(tenantId: String!, code: String!, name: String!): EventsIdempotencyBatch!
    deleteEventsIdempotencyBatch(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyBatchGqlResolvers = {
  Query: {
    getEventsIdempotencyBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
