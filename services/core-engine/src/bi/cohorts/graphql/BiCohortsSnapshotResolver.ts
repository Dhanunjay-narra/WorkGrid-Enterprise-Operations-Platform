export const BiCohortsSnapshotGqlTypeDefs = `
  type BiCohortsSnapshot {
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
    getBiCohortsSnapshot(id: ID!): BiCohortsSnapshot
    listBiCohortsSnapshots(tenantId: String!, limit: Int): [BiCohortsSnapshot!]!
  }

  extend type Mutation {
    createBiCohortsSnapshot(tenantId: String!, code: String!, name: String!): BiCohortsSnapshot!
    deleteBiCohortsSnapshot(id: ID!): Boolean!
  }
`;

export const BiCohortsSnapshotGqlResolvers = {
  Query: {
    getBiCohortsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
