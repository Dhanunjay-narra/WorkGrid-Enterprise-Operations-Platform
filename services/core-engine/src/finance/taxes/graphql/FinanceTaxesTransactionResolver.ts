export const FinanceTaxesTransactionGqlTypeDefs = `
  type FinanceTaxesTransaction {
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
    getFinanceTaxesTransaction(id: ID!): FinanceTaxesTransaction
    listFinanceTaxesTransactions(tenantId: String!, limit: Int): [FinanceTaxesTransaction!]!
  }

  extend type Mutation {
    createFinanceTaxesTransaction(tenantId: String!, code: String!, name: String!): FinanceTaxesTransaction!
    deleteFinanceTaxesTransaction(id: ID!): Boolean!
  }
`;

export const FinanceTaxesTransactionGqlResolvers = {
  Query: {
    getFinanceTaxesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
