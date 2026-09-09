export const EventsConsumersEntryGqlTypeDefs = `
  type EventsConsumersEntry {
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
    getEventsConsumersEntry(id: ID!): EventsConsumersEntry
    listEventsConsumersEntrys(tenantId: String!, limit: Int): [EventsConsumersEntry!]!
  }

  extend type Mutation {
    createEventsConsumersEntry(tenantId: String!, code: String!, name: String!): EventsConsumersEntry!
    deleteEventsConsumersEntry(id: ID!): Boolean!
  }
`;

export const EventsConsumersEntryGqlResolvers = {
  Query: {
    getEventsConsumersEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
