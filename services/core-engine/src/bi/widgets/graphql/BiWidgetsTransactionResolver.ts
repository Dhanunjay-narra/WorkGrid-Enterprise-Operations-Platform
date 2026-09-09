export const BiWidgetsTransactionGqlTypeDefs = `
  type BiWidgetsTransaction {
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
    getBiWidgetsTransaction(id: ID!): BiWidgetsTransaction
    listBiWidgetsTransactions(tenantId: String!, limit: Int): [BiWidgetsTransaction!]!
  }

  extend type Mutation {
    createBiWidgetsTransaction(tenantId: String!, code: String!, name: String!): BiWidgetsTransaction!
    deleteBiWidgetsTransaction(id: ID!): Boolean!
  }
`;

export const BiWidgetsTransactionGqlResolvers = {
  Query: {
    getBiWidgetsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
