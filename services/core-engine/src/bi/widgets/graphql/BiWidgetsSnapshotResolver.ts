export const BiWidgetsSnapshotGqlTypeDefs = `
  type BiWidgetsSnapshot {
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
    getBiWidgetsSnapshot(id: ID!): BiWidgetsSnapshot
    listBiWidgetsSnapshots(tenantId: String!, limit: Int): [BiWidgetsSnapshot!]!
  }

  extend type Mutation {
    createBiWidgetsSnapshot(tenantId: String!, code: String!, name: String!): BiWidgetsSnapshot!
    deleteBiWidgetsSnapshot(id: ID!): Boolean!
  }
`;

export const BiWidgetsSnapshotGqlResolvers = {
  Query: {
    getBiWidgetsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
