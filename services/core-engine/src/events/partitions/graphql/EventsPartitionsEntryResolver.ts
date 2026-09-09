export const EventsPartitionsEntryGqlTypeDefs = `
  type EventsPartitionsEntry {
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
    getEventsPartitionsEntry(id: ID!): EventsPartitionsEntry
    listEventsPartitionsEntrys(tenantId: String!, limit: Int): [EventsPartitionsEntry!]!
  }

  extend type Mutation {
    createEventsPartitionsEntry(tenantId: String!, code: String!, name: String!): EventsPartitionsEntry!
    deleteEventsPartitionsEntry(id: ID!): Boolean!
  }
`;

export const EventsPartitionsEntryGqlResolvers = {
  Query: {
    getEventsPartitionsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
