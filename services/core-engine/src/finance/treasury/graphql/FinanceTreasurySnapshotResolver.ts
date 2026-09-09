export const FinanceTreasurySnapshotGqlTypeDefs = `
  type FinanceTreasurySnapshot {
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
    getFinanceTreasurySnapshot(id: ID!): FinanceTreasurySnapshot
    listFinanceTreasurySnapshots(tenantId: String!, limit: Int): [FinanceTreasurySnapshot!]!
  }

  extend type Mutation {
    createFinanceTreasurySnapshot(tenantId: String!, code: String!, name: String!): FinanceTreasurySnapshot!
    deleteFinanceTreasurySnapshot(id: ID!): Boolean!
  }
`;

export const FinanceTreasurySnapshotGqlResolvers = {
  Query: {
    getFinanceTreasurySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasurySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
