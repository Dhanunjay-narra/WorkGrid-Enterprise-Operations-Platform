export const EventsReplayEntryGqlTypeDefs = `
  type EventsReplayEntry {
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
    getEventsReplayEntry(id: ID!): EventsReplayEntry
    listEventsReplayEntrys(tenantId: String!, limit: Int): [EventsReplayEntry!]!
  }

  extend type Mutation {
    createEventsReplayEntry(tenantId: String!, code: String!, name: String!): EventsReplayEntry!
    deleteEventsReplayEntry(id: ID!): Boolean!
  }
`;

export const EventsReplayEntryGqlResolvers = {
  Query: {
    getEventsReplayEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
