export const TenancySnapshotGqlTypeDefs = `
  type TenancySnapshot {
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
    getTenancySnapshot(id: ID!): TenancySnapshot
    listTenancySnapshots(tenantId: String!, limit: Int): [TenancySnapshot!]!
  }

  extend type Mutation {
    createTenancySnapshot(tenantId: String!, code: String!, name: String!): TenancySnapshot!
    deleteTenancySnapshot(id: ID!): Boolean!
  }
`;

export const TenancySnapshotGqlResolvers = {
  Query: {
    getTenancySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
