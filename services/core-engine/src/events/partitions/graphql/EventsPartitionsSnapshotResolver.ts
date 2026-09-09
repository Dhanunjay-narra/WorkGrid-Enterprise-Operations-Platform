export const EventsPartitionsSnapshotGqlTypeDefs = `
  type EventsPartitionsSnapshot {
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
    getEventsPartitionsSnapshot(id: ID!): EventsPartitionsSnapshot
    listEventsPartitionsSnapshots(tenantId: String!, limit: Int): [EventsPartitionsSnapshot!]!
  }

  extend type Mutation {
    createEventsPartitionsSnapshot(tenantId: String!, code: String!, name: String!): EventsPartitionsSnapshot!
    deleteEventsPartitionsSnapshot(id: ID!): Boolean!
  }
`;

export const EventsPartitionsSnapshotGqlResolvers = {
  Query: {
    getEventsPartitionsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
