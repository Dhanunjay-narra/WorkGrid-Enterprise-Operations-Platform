export const BiCohortsTransactionGqlTypeDefs = `
  type BiCohortsTransaction {
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
    getBiCohortsTransaction(id: ID!): BiCohortsTransaction
    listBiCohortsTransactions(tenantId: String!, limit: Int): [BiCohortsTransaction!]!
  }

  extend type Mutation {
    createBiCohortsTransaction(tenantId: String!, code: String!, name: String!): BiCohortsTransaction!
    deleteBiCohortsTransaction(id: ID!): Boolean!
  }
`;

export const BiCohortsTransactionGqlResolvers = {
  Query: {
    getBiCohortsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
