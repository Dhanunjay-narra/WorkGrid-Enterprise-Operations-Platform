export const EventsSchemaReportGqlTypeDefs = `
  type EventsSchemaReport {
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
    getEventsSchemaReport(id: ID!): EventsSchemaReport
    listEventsSchemaReports(tenantId: String!, limit: Int): [EventsSchemaReport!]!
  }

  extend type Mutation {
    createEventsSchemaReport(tenantId: String!, code: String!, name: String!): EventsSchemaReport!
    deleteEventsSchemaReport(id: ID!): Boolean!
  }
`;

export const EventsSchemaReportGqlResolvers = {
  Query: {
    getEventsSchemaReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
