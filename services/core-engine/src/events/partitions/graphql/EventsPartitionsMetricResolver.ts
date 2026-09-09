export const EventsPartitionsMetricGqlTypeDefs = `
  type EventsPartitionsMetric {
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
    getEventsPartitionsMetric(id: ID!): EventsPartitionsMetric
    listEventsPartitionsMetrics(tenantId: String!, limit: Int): [EventsPartitionsMetric!]!
  }

  extend type Mutation {
    createEventsPartitionsMetric(tenantId: String!, code: String!, name: String!): EventsPartitionsMetric!
    deleteEventsPartitionsMetric(id: ID!): Boolean!
  }
`;

export const EventsPartitionsMetricGqlResolvers = {
  Query: {
    getEventsPartitionsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
