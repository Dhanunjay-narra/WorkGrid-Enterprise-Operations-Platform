export const EventsIdempotencyEntryGqlTypeDefs = `
  type EventsIdempotencyEntry {
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
    getEventsIdempotencyEntry(id: ID!): EventsIdempotencyEntry
    listEventsIdempotencyEntrys(tenantId: String!, limit: Int): [EventsIdempotencyEntry!]!
  }

  extend type Mutation {
    createEventsIdempotencyEntry(tenantId: String!, code: String!, name: String!): EventsIdempotencyEntry!
    deleteEventsIdempotencyEntry(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyEntryGqlResolvers = {
  Query: {
    getEventsIdempotencyEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
