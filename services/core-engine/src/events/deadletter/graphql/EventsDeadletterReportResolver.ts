export const EventsDeadletterReportGqlTypeDefs = `
  type EventsDeadletterReport {
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
    getEventsDeadletterReport(id: ID!): EventsDeadletterReport
    listEventsDeadletterReports(tenantId: String!, limit: Int): [EventsDeadletterReport!]!
  }

  extend type Mutation {
    createEventsDeadletterReport(tenantId: String!, code: String!, name: String!): EventsDeadletterReport!
    deleteEventsDeadletterReport(id: ID!): Boolean!
  }
`;

export const EventsDeadletterReportGqlResolvers = {
  Query: {
    getEventsDeadletterReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
