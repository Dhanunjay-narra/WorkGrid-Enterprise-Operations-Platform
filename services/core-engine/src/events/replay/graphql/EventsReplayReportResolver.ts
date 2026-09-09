export const EventsReplayReportGqlTypeDefs = `
  type EventsReplayReport {
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
    getEventsReplayReport(id: ID!): EventsReplayReport
    listEventsReplayReports(tenantId: String!, limit: Int): [EventsReplayReport!]!
  }

  extend type Mutation {
    createEventsReplayReport(tenantId: String!, code: String!, name: String!): EventsReplayReport!
    deleteEventsReplayReport(id: ID!): Boolean!
  }
`;

export const EventsReplayReportGqlResolvers = {
  Query: {
    getEventsReplayReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
