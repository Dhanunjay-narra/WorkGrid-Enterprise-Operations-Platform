export const EventsMetricsEntryGqlTypeDefs = `
  type EventsMetricsEntry {
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
    getEventsMetricsEntry(id: ID!): EventsMetricsEntry
    listEventsMetricsEntrys(tenantId: String!, limit: Int): [EventsMetricsEntry!]!
  }

  extend type Mutation {
    createEventsMetricsEntry(tenantId: String!, code: String!, name: String!): EventsMetricsEntry!
    deleteEventsMetricsEntry(id: ID!): Boolean!
  }
`;

export const EventsMetricsEntryGqlResolvers = {
  Query: {
    getEventsMetricsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
