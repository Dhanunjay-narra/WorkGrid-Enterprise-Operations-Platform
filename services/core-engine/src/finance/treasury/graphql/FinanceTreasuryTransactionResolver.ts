export const FinanceTreasuryTransactionGqlTypeDefs = `
  type FinanceTreasuryTransaction {
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
    getFinanceTreasuryTransaction(id: ID!): FinanceTreasuryTransaction
    listFinanceTreasuryTransactions(tenantId: String!, limit: Int): [FinanceTreasuryTransaction!]!
  }

  extend type Mutation {
    createFinanceTreasuryTransaction(tenantId: String!, code: String!, name: String!): FinanceTreasuryTransaction!
    deleteFinanceTreasuryTransaction(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryTransactionGqlResolvers = {
  Query: {
    getFinanceTreasuryTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
