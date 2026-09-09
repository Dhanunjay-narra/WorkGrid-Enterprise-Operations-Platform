export const EventsOutboxSummaryGqlTypeDefs = `
  type EventsOutboxSummary {
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
    getEventsOutboxSummary(id: ID!): EventsOutboxSummary
    listEventsOutboxSummarys(tenantId: String!, limit: Int): [EventsOutboxSummary!]!
  }

  extend type Mutation {
    createEventsOutboxSummary(tenantId: String!, code: String!, name: String!): EventsOutboxSummary!
    deleteEventsOutboxSummary(id: ID!): Boolean!
  }
`;

export const EventsOutboxSummaryGqlResolvers = {
  Query: {
    getEventsOutboxSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
