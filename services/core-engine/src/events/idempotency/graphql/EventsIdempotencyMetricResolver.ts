export const EventsIdempotencyMetricGqlTypeDefs = `
  type EventsIdempotencyMetric {
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
    getEventsIdempotencyMetric(id: ID!): EventsIdempotencyMetric
    listEventsIdempotencyMetrics(tenantId: String!, limit: Int): [EventsIdempotencyMetric!]!
  }

  extend type Mutation {
    createEventsIdempotencyMetric(tenantId: String!, code: String!, name: String!): EventsIdempotencyMetric!
    deleteEventsIdempotencyMetric(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyMetricGqlResolvers = {
  Query: {
    getEventsIdempotencyMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
