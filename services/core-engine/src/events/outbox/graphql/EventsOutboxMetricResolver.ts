export const EventsOutboxMetricGqlTypeDefs = `
  type EventsOutboxMetric {
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
    getEventsOutboxMetric(id: ID!): EventsOutboxMetric
    listEventsOutboxMetrics(tenantId: String!, limit: Int): [EventsOutboxMetric!]!
  }

  extend type Mutation {
    createEventsOutboxMetric(tenantId: String!, code: String!, name: String!): EventsOutboxMetric!
    deleteEventsOutboxMetric(id: ID!): Boolean!
  }
`;

export const EventsOutboxMetricGqlResolvers = {
  Query: {
    getEventsOutboxMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
