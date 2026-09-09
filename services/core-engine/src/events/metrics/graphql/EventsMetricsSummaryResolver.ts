export const EventsMetricsSummaryGqlTypeDefs = `
  type EventsMetricsSummary {
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
    getEventsMetricsSummary(id: ID!): EventsMetricsSummary
    listEventsMetricsSummarys(tenantId: String!, limit: Int): [EventsMetricsSummary!]!
  }

  extend type Mutation {
    createEventsMetricsSummary(tenantId: String!, code: String!, name: String!): EventsMetricsSummary!
    deleteEventsMetricsSummary(id: ID!): Boolean!
  }
`;

export const EventsMetricsSummaryGqlResolvers = {
  Query: {
    getEventsMetricsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
