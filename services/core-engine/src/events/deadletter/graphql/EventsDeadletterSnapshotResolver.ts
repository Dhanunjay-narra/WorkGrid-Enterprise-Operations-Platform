export const EventsDeadletterSnapshotGqlTypeDefs = `
  type EventsDeadletterSnapshot {
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
    getEventsDeadletterSnapshot(id: ID!): EventsDeadletterSnapshot
    listEventsDeadletterSnapshots(tenantId: String!, limit: Int): [EventsDeadletterSnapshot!]!
  }

  extend type Mutation {
    createEventsDeadletterSnapshot(tenantId: String!, code: String!, name: String!): EventsDeadletterSnapshot!
    deleteEventsDeadletterSnapshot(id: ID!): Boolean!
  }
`;

export const EventsDeadletterSnapshotGqlResolvers = {
  Query: {
    getEventsDeadletterSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
