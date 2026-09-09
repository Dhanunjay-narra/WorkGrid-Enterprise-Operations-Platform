export const EventsOutboxSnapshotGqlTypeDefs = `
  type EventsOutboxSnapshot {
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
    getEventsOutboxSnapshot(id: ID!): EventsOutboxSnapshot
    listEventsOutboxSnapshots(tenantId: String!, limit: Int): [EventsOutboxSnapshot!]!
  }

  extend type Mutation {
    createEventsOutboxSnapshot(tenantId: String!, code: String!, name: String!): EventsOutboxSnapshot!
    deleteEventsOutboxSnapshot(id: ID!): Boolean!
  }
`;

export const EventsOutboxSnapshotGqlResolvers = {
  Query: {
    getEventsOutboxSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
