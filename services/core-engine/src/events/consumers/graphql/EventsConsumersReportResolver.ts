export const EventsConsumersReportGqlTypeDefs = `
  type EventsConsumersReport {
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
    getEventsConsumersReport(id: ID!): EventsConsumersReport
    listEventsConsumersReports(tenantId: String!, limit: Int): [EventsConsumersReport!]!
  }

  extend type Mutation {
    createEventsConsumersReport(tenantId: String!, code: String!, name: String!): EventsConsumersReport!
    deleteEventsConsumersReport(id: ID!): Boolean!
  }
`;

export const EventsConsumersReportGqlResolvers = {
  Query: {
    getEventsConsumersReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
