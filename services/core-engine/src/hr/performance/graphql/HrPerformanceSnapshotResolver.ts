export const HrPerformanceSnapshotGqlTypeDefs = `
  type HrPerformanceSnapshot {
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
    getHrPerformanceSnapshot(id: ID!): HrPerformanceSnapshot
    listHrPerformanceSnapshots(tenantId: String!, limit: Int): [HrPerformanceSnapshot!]!
  }

  extend type Mutation {
    createHrPerformanceSnapshot(tenantId: String!, code: String!, name: String!): HrPerformanceSnapshot!
    deleteHrPerformanceSnapshot(id: ID!): Boolean!
  }
`;

export const HrPerformanceSnapshotGqlResolvers = {
  Query: {
    getHrPerformanceSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
