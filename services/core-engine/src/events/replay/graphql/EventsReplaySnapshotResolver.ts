export const EventsReplaySnapshotGqlTypeDefs = `
  type EventsReplaySnapshot {
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
    getEventsReplaySnapshot(id: ID!): EventsReplaySnapshot
    listEventsReplaySnapshots(tenantId: String!, limit: Int): [EventsReplaySnapshot!]!
  }

  extend type Mutation {
    createEventsReplaySnapshot(tenantId: String!, code: String!, name: String!): EventsReplaySnapshot!
    deleteEventsReplaySnapshot(id: ID!): Boolean!
  }
`;

export const EventsReplaySnapshotGqlResolvers = {
  Query: {
    getEventsReplaySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplaySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
