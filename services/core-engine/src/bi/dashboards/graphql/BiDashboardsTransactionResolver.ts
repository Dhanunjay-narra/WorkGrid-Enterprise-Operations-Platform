export const BiDashboardsTransactionGqlTypeDefs = `
  type BiDashboardsTransaction {
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
    getBiDashboardsTransaction(id: ID!): BiDashboardsTransaction
    listBiDashboardsTransactions(tenantId: String!, limit: Int): [BiDashboardsTransaction!]!
  }

  extend type Mutation {
    createBiDashboardsTransaction(tenantId: String!, code: String!, name: String!): BiDashboardsTransaction!
    deleteBiDashboardsTransaction(id: ID!): Boolean!
  }
`;

export const BiDashboardsTransactionGqlResolvers = {
  Query: {
    getBiDashboardsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
