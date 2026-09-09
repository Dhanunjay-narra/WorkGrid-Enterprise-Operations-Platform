export const EventsIdempotencyThresholdGqlTypeDefs = `
  type EventsIdempotencyThreshold {
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
    getEventsIdempotencyThreshold(id: ID!): EventsIdempotencyThreshold
    listEventsIdempotencyThresholds(tenantId: String!, limit: Int): [EventsIdempotencyThreshold!]!
  }

  extend type Mutation {
    createEventsIdempotencyThreshold(tenantId: String!, code: String!, name: String!): EventsIdempotencyThreshold!
    deleteEventsIdempotencyThreshold(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyThresholdGqlResolvers = {
  Query: {
    getEventsIdempotencyThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
