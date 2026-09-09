export const EventsOutboxReportGqlTypeDefs = `
  type EventsOutboxReport {
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
    getEventsOutboxReport(id: ID!): EventsOutboxReport
    listEventsOutboxReports(tenantId: String!, limit: Int): [EventsOutboxReport!]!
  }

  extend type Mutation {
    createEventsOutboxReport(tenantId: String!, code: String!, name: String!): EventsOutboxReport!
    deleteEventsOutboxReport(id: ID!): Boolean!
  }
`;

export const EventsOutboxReportGqlResolvers = {
  Query: {
    getEventsOutboxReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
