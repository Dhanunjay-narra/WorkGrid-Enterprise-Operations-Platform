export const FinanceForecastTransactionGqlTypeDefs = `
  type FinanceForecastTransaction {
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
    getFinanceForecastTransaction(id: ID!): FinanceForecastTransaction
    listFinanceForecastTransactions(tenantId: String!, limit: Int): [FinanceForecastTransaction!]!
  }

  extend type Mutation {
    createFinanceForecastTransaction(tenantId: String!, code: String!, name: String!): FinanceForecastTransaction!
    deleteFinanceForecastTransaction(id: ID!): Boolean!
  }
`;

export const FinanceForecastTransactionGqlResolvers = {
  Query: {
    getFinanceForecastTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
