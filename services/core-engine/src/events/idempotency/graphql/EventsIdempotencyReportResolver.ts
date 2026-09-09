export const EventsIdempotencyReportGqlTypeDefs = `
  type EventsIdempotencyReport {
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
    getEventsIdempotencyReport(id: ID!): EventsIdempotencyReport
    listEventsIdempotencyReports(tenantId: String!, limit: Int): [EventsIdempotencyReport!]!
  }

  extend type Mutation {
    createEventsIdempotencyReport(tenantId: String!, code: String!, name: String!): EventsIdempotencyReport!
    deleteEventsIdempotencyReport(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyReportGqlResolvers = {
  Query: {
    getEventsIdempotencyReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
