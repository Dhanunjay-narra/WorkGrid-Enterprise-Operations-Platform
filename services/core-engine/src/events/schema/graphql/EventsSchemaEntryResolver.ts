export const EventsSchemaEntryGqlTypeDefs = `
  type EventsSchemaEntry {
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
    getEventsSchemaEntry(id: ID!): EventsSchemaEntry
    listEventsSchemaEntrys(tenantId: String!, limit: Int): [EventsSchemaEntry!]!
  }

  extend type Mutation {
    createEventsSchemaEntry(tenantId: String!, code: String!, name: String!): EventsSchemaEntry!
    deleteEventsSchemaEntry(id: ID!): Boolean!
  }
`;

export const EventsSchemaEntryGqlResolvers = {
  Query: {
    getEventsSchemaEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
