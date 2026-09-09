export const IntSyncSnapshotGqlTypeDefs = `
  type IntSyncSnapshot {
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
    getIntSyncSnapshot(id: ID!): IntSyncSnapshot
    listIntSyncSnapshots(tenantId: String!, limit: Int): [IntSyncSnapshot!]!
  }

  extend type Mutation {
    createIntSyncSnapshot(tenantId: String!, code: String!, name: String!): IntSyncSnapshot!
    deleteIntSyncSnapshot(id: ID!): Boolean!
  }
`;

export const IntSyncSnapshotGqlResolvers = {
  Query: {
    getIntSyncSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
