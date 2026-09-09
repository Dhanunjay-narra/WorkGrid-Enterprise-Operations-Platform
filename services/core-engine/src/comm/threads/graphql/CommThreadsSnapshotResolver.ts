export const CommThreadsSnapshotGqlTypeDefs = `
  type CommThreadsSnapshot {
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
    getCommThreadsSnapshot(id: ID!): CommThreadsSnapshot
    listCommThreadsSnapshots(tenantId: String!, limit: Int): [CommThreadsSnapshot!]!
  }

  extend type Mutation {
    createCommThreadsSnapshot(tenantId: String!, code: String!, name: String!): CommThreadsSnapshot!
    deleteCommThreadsSnapshot(id: ID!): Boolean!
  }
`;

export const CommThreadsSnapshotGqlResolvers = {
  Query: {
    getCommThreadsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
