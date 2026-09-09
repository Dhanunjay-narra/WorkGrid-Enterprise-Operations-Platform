export const BiQueriesTransactionGqlTypeDefs = `
  type BiQueriesTransaction {
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
    getBiQueriesTransaction(id: ID!): BiQueriesTransaction
    listBiQueriesTransactions(tenantId: String!, limit: Int): [BiQueriesTransaction!]!
  }

  extend type Mutation {
    createBiQueriesTransaction(tenantId: String!, code: String!, name: String!): BiQueriesTransaction!
    deleteBiQueriesTransaction(id: ID!): Boolean!
  }
`;

export const BiQueriesTransactionGqlResolvers = {
  Query: {
    getBiQueriesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
