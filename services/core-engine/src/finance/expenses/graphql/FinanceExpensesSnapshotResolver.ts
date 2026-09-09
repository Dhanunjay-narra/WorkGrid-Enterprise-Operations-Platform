export const FinanceExpensesSnapshotGqlTypeDefs = `
  type FinanceExpensesSnapshot {
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
    getFinanceExpensesSnapshot(id: ID!): FinanceExpensesSnapshot
    listFinanceExpensesSnapshots(tenantId: String!, limit: Int): [FinanceExpensesSnapshot!]!
  }

  extend type Mutation {
    createFinanceExpensesSnapshot(tenantId: String!, code: String!, name: String!): FinanceExpensesSnapshot!
    deleteFinanceExpensesSnapshot(id: ID!): Boolean!
  }
`;

export const FinanceExpensesSnapshotGqlResolvers = {
  Query: {
    getFinanceExpensesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
