export const FinanceInvoicesTransactionGqlTypeDefs = `
  type FinanceInvoicesTransaction {
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
    getFinanceInvoicesTransaction(id: ID!): FinanceInvoicesTransaction
    listFinanceInvoicesTransactions(tenantId: String!, limit: Int): [FinanceInvoicesTransaction!]!
  }

  extend type Mutation {
    createFinanceInvoicesTransaction(tenantId: String!, code: String!, name: String!): FinanceInvoicesTransaction!
    deleteFinanceInvoicesTransaction(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesTransactionGqlResolvers = {
  Query: {
    getFinanceInvoicesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
