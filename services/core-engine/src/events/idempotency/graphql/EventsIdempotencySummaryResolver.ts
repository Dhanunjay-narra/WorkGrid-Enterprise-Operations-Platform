export const EventsIdempotencySummaryGqlTypeDefs = `
  type EventsIdempotencySummary {
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
    getEventsIdempotencySummary(id: ID!): EventsIdempotencySummary
    listEventsIdempotencySummarys(tenantId: String!, limit: Int): [EventsIdempotencySummary!]!
  }

  extend type Mutation {
    createEventsIdempotencySummary(tenantId: String!, code: String!, name: String!): EventsIdempotencySummary!
    deleteEventsIdempotencySummary(id: ID!): Boolean!
  }
`;

export const EventsIdempotencySummaryGqlResolvers = {
  Query: {
    getEventsIdempotencySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
