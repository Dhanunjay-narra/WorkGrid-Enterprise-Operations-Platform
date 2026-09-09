export const IntSyncEventGqlTypeDefs = `
  type IntSyncEvent {
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
    getIntSyncEvent(id: ID!): IntSyncEvent
    listIntSyncEvents(tenantId: String!, limit: Int): [IntSyncEvent!]!
  }

  extend type Mutation {
    createIntSyncEvent(tenantId: String!, code: String!, name: String!): IntSyncEvent!
    deleteIntSyncEvent(id: ID!): Boolean!
  }
`;

export const IntSyncEventGqlResolvers = {
  Query: {
    getIntSyncEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
