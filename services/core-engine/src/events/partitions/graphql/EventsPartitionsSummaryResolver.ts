export const EventsPartitionsSummaryGqlTypeDefs = `
  type EventsPartitionsSummary {
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
    getEventsPartitionsSummary(id: ID!): EventsPartitionsSummary
    listEventsPartitionsSummarys(tenantId: String!, limit: Int): [EventsPartitionsSummary!]!
  }

  extend type Mutation {
    createEventsPartitionsSummary(tenantId: String!, code: String!, name: String!): EventsPartitionsSummary!
    deleteEventsPartitionsSummary(id: ID!): Boolean!
  }
`;

export const EventsPartitionsSummaryGqlResolvers = {
  Query: {
    getEventsPartitionsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
