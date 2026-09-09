export const EventsDeadletterSummaryGqlTypeDefs = `
  type EventsDeadletterSummary {
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
    getEventsDeadletterSummary(id: ID!): EventsDeadletterSummary
    listEventsDeadletterSummarys(tenantId: String!, limit: Int): [EventsDeadletterSummary!]!
  }

  extend type Mutation {
    createEventsDeadletterSummary(tenantId: String!, code: String!, name: String!): EventsDeadletterSummary!
    deleteEventsDeadletterSummary(id: ID!): Boolean!
  }
`;

export const EventsDeadletterSummaryGqlResolvers = {
  Query: {
    getEventsDeadletterSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
