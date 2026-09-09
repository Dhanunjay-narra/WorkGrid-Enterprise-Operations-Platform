export const HrPayrollSnapshotGqlTypeDefs = `
  type HrPayrollSnapshot {
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
    getHrPayrollSnapshot(id: ID!): HrPayrollSnapshot
    listHrPayrollSnapshots(tenantId: String!, limit: Int): [HrPayrollSnapshot!]!
  }

  extend type Mutation {
    createHrPayrollSnapshot(tenantId: String!, code: String!, name: String!): HrPayrollSnapshot!
    deleteHrPayrollSnapshot(id: ID!): Boolean!
  }
`;

export const HrPayrollSnapshotGqlResolvers = {
  Query: {
    getHrPayrollSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
