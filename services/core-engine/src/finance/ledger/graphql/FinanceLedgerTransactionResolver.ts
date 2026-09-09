export const FinanceLedgerTransactionGqlTypeDefs = `
  type FinanceLedgerTransaction {
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
    getFinanceLedgerTransaction(id: ID!): FinanceLedgerTransaction
    listFinanceLedgerTransactions(tenantId: String!, limit: Int): [FinanceLedgerTransaction!]!
  }

  extend type Mutation {
    createFinanceLedgerTransaction(tenantId: String!, code: String!, name: String!): FinanceLedgerTransaction!
    deleteFinanceLedgerTransaction(id: ID!): Boolean!
  }
`;

export const FinanceLedgerTransactionGqlResolvers = {
  Query: {
    getFinanceLedgerTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
