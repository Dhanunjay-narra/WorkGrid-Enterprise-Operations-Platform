export const FinanceExpensesTransactionGqlTypeDefs = `
  type FinanceExpensesTransaction {
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
    getFinanceExpensesTransaction(id: ID!): FinanceExpensesTransaction
    listFinanceExpensesTransactions(tenantId: String!, limit: Int): [FinanceExpensesTransaction!]!
  }

  extend type Mutation {
    createFinanceExpensesTransaction(tenantId: String!, code: String!, name: String!): FinanceExpensesTransaction!
    deleteFinanceExpensesTransaction(id: ID!): Boolean!
  }
`;

export const FinanceExpensesTransactionGqlResolvers = {
  Query: {
    getFinanceExpensesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
