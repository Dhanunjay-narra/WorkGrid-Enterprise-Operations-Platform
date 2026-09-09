export const EventsConsumersSnapshotGqlTypeDefs = `
  type EventsConsumersSnapshot {
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
    getEventsConsumersSnapshot(id: ID!): EventsConsumersSnapshot
    listEventsConsumersSnapshots(tenantId: String!, limit: Int): [EventsConsumersSnapshot!]!
  }

  extend type Mutation {
    createEventsConsumersSnapshot(tenantId: String!, code: String!, name: String!): EventsConsumersSnapshot!
    deleteEventsConsumersSnapshot(id: ID!): Boolean!
  }
`;

export const EventsConsumersSnapshotGqlResolvers = {
  Query: {
    getEventsConsumersSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
