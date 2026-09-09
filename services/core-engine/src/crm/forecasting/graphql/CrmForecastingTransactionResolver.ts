export const CrmForecastingTransactionGqlTypeDefs = `
  type CrmForecastingTransaction {
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
    getCrmForecastingTransaction(id: ID!): CrmForecastingTransaction
    listCrmForecastingTransactions(tenantId: String!, limit: Int): [CrmForecastingTransaction!]!
  }

  extend type Mutation {
    createCrmForecastingTransaction(tenantId: String!, code: String!, name: String!): CrmForecastingTransaction!
    deleteCrmForecastingTransaction(id: ID!): Boolean!
  }
`;

export const CrmForecastingTransactionGqlResolvers = {
  Query: {
    getCrmForecastingTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
