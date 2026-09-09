export const BiAnomaliesTransactionGqlTypeDefs = `
  type BiAnomaliesTransaction {
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
    getBiAnomaliesTransaction(id: ID!): BiAnomaliesTransaction
    listBiAnomaliesTransactions(tenantId: String!, limit: Int): [BiAnomaliesTransaction!]!
  }

  extend type Mutation {
    createBiAnomaliesTransaction(tenantId: String!, code: String!, name: String!): BiAnomaliesTransaction!
    deleteBiAnomaliesTransaction(id: ID!): Boolean!
  }
`;

export const BiAnomaliesTransactionGqlResolvers = {
  Query: {
    getBiAnomaliesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
