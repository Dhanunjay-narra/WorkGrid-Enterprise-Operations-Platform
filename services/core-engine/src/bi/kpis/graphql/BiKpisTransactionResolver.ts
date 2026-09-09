export const BiKpisTransactionGqlTypeDefs = `
  type BiKpisTransaction {
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
    getBiKpisTransaction(id: ID!): BiKpisTransaction
    listBiKpisTransactions(tenantId: String!, limit: Int): [BiKpisTransaction!]!
  }

  extend type Mutation {
    createBiKpisTransaction(tenantId: String!, code: String!, name: String!): BiKpisTransaction!
    deleteBiKpisTransaction(id: ID!): Boolean!
  }
`;

export const BiKpisTransactionGqlResolvers = {
  Query: {
    getBiKpisTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
