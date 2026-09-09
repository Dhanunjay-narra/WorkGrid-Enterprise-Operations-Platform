export const IntRateLimitsSnapshotGqlTypeDefs = `
  type IntRateLimitsSnapshot {
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
    getIntRateLimitsSnapshot(id: ID!): IntRateLimitsSnapshot
    listIntRateLimitsSnapshots(tenantId: String!, limit: Int): [IntRateLimitsSnapshot!]!
  }

  extend type Mutation {
    createIntRateLimitsSnapshot(tenantId: String!, code: String!, name: String!): IntRateLimitsSnapshot!
    deleteIntRateLimitsSnapshot(id: ID!): Boolean!
  }
`;

export const IntRateLimitsSnapshotGqlResolvers = {
  Query: {
    getIntRateLimitsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
