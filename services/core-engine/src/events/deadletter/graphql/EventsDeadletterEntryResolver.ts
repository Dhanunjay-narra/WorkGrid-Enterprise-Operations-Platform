export const EventsDeadletterEntryGqlTypeDefs = `
  type EventsDeadletterEntry {
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
    getEventsDeadletterEntry(id: ID!): EventsDeadletterEntry
    listEventsDeadletterEntrys(tenantId: String!, limit: Int): [EventsDeadletterEntry!]!
  }

  extend type Mutation {
    createEventsDeadletterEntry(tenantId: String!, code: String!, name: String!): EventsDeadletterEntry!
    deleteEventsDeadletterEntry(id: ID!): Boolean!
  }
`;

export const EventsDeadletterEntryGqlResolvers = {
  Query: {
    getEventsDeadletterEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
