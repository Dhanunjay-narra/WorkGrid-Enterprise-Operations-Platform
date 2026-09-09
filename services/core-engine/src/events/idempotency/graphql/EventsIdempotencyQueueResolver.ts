export const EventsIdempotencyQueueGqlTypeDefs = `
  type EventsIdempotencyQueue {
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
    getEventsIdempotencyQueue(id: ID!): EventsIdempotencyQueue
    listEventsIdempotencyQueues(tenantId: String!, limit: Int): [EventsIdempotencyQueue!]!
  }

  extend type Mutation {
    createEventsIdempotencyQueue(tenantId: String!, code: String!, name: String!): EventsIdempotencyQueue!
    deleteEventsIdempotencyQueue(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyQueueGqlResolvers = {
  Query: {
    getEventsIdempotencyQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
