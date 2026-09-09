export const EventsIdempotencyTaskGqlTypeDefs = `
  type EventsIdempotencyTask {
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
    getEventsIdempotencyTask(id: ID!): EventsIdempotencyTask
    listEventsIdempotencyTasks(tenantId: String!, limit: Int): [EventsIdempotencyTask!]!
  }

  extend type Mutation {
    createEventsIdempotencyTask(tenantId: String!, code: String!, name: String!): EventsIdempotencyTask!
    deleteEventsIdempotencyTask(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyTaskGqlResolvers = {
  Query: {
    getEventsIdempotencyTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
