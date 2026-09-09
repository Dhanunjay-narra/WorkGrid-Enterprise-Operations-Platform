export const EventsOutboxEntryGqlTypeDefs = `
  type EventsOutboxEntry {
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
    getEventsOutboxEntry(id: ID!): EventsOutboxEntry
    listEventsOutboxEntrys(tenantId: String!, limit: Int): [EventsOutboxEntry!]!
  }

  extend type Mutation {
    createEventsOutboxEntry(tenantId: String!, code: String!, name: String!): EventsOutboxEntry!
    deleteEventsOutboxEntry(id: ID!): Boolean!
  }
`;

export const EventsOutboxEntryGqlResolvers = {
  Query: {
    getEventsOutboxEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
