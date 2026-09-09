export const FinanceBankingTransactionGqlTypeDefs = `
  type FinanceBankingTransaction {
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
    getFinanceBankingTransaction(id: ID!): FinanceBankingTransaction
    listFinanceBankingTransactions(tenantId: String!, limit: Int): [FinanceBankingTransaction!]!
  }

  extend type Mutation {
    createFinanceBankingTransaction(tenantId: String!, code: String!, name: String!): FinanceBankingTransaction!
    deleteFinanceBankingTransaction(id: ID!): Boolean!
  }
`;

export const FinanceBankingTransactionGqlResolvers = {
  Query: {
    getFinanceBankingTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
