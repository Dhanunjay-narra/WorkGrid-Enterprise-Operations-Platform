export const EventsMetricsReportGqlTypeDefs = `
  type EventsMetricsReport {
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
    getEventsMetricsReport(id: ID!): EventsMetricsReport
    listEventsMetricsReports(tenantId: String!, limit: Int): [EventsMetricsReport!]!
  }

  extend type Mutation {
    createEventsMetricsReport(tenantId: String!, code: String!, name: String!): EventsMetricsReport!
    deleteEventsMetricsReport(id: ID!): Boolean!
  }
`;

export const EventsMetricsReportGqlResolvers = {
  Query: {
    getEventsMetricsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
