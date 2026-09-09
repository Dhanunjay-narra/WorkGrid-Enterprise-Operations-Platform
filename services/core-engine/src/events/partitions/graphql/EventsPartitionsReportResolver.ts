export const EventsPartitionsReportGqlTypeDefs = `
  type EventsPartitionsReport {
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
    getEventsPartitionsReport(id: ID!): EventsPartitionsReport
    listEventsPartitionsReports(tenantId: String!, limit: Int): [EventsPartitionsReport!]!
  }

  extend type Mutation {
    createEventsPartitionsReport(tenantId: String!, code: String!, name: String!): EventsPartitionsReport!
    deleteEventsPartitionsReport(id: ID!): Boolean!
  }
`;

export const EventsPartitionsReportGqlResolvers = {
  Query: {
    getEventsPartitionsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
