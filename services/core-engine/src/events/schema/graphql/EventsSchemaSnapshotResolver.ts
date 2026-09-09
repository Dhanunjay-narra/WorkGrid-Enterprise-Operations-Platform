export const EventsSchemaSnapshotGqlTypeDefs = `
  type EventsSchemaSnapshot {
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
    getEventsSchemaSnapshot(id: ID!): EventsSchemaSnapshot
    listEventsSchemaSnapshots(tenantId: String!, limit: Int): [EventsSchemaSnapshot!]!
  }

  extend type Mutation {
    createEventsSchemaSnapshot(tenantId: String!, code: String!, name: String!): EventsSchemaSnapshot!
    deleteEventsSchemaSnapshot(id: ID!): Boolean!
  }
`;

export const EventsSchemaSnapshotGqlResolvers = {
  Query: {
    getEventsSchemaSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
