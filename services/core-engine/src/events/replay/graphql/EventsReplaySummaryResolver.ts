export const EventsReplaySummaryGqlTypeDefs = `
  type EventsReplaySummary {
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
    getEventsReplaySummary(id: ID!): EventsReplaySummary
    listEventsReplaySummarys(tenantId: String!, limit: Int): [EventsReplaySummary!]!
  }

  extend type Mutation {
    createEventsReplaySummary(tenantId: String!, code: String!, name: String!): EventsReplaySummary!
    deleteEventsReplaySummary(id: ID!): Boolean!
  }
`;

export const EventsReplaySummaryGqlResolvers = {
  Query: {
    getEventsReplaySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplaySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
