export const BiKpisSnapshotGqlTypeDefs = `
  type BiKpisSnapshot {
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
    getBiKpisSnapshot(id: ID!): BiKpisSnapshot
    listBiKpisSnapshots(tenantId: String!, limit: Int): [BiKpisSnapshot!]!
  }

  extend type Mutation {
    createBiKpisSnapshot(tenantId: String!, code: String!, name: String!): BiKpisSnapshot!
    deleteBiKpisSnapshot(id: ID!): Boolean!
  }
`;

export const BiKpisSnapshotGqlResolvers = {
  Query: {
    getBiKpisSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
