export const SupportCsatTransactionGqlTypeDefs = `
  type SupportCsatTransaction {
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
    getSupportCsatTransaction(id: ID!): SupportCsatTransaction
    listSupportCsatTransactions(tenantId: String!, limit: Int): [SupportCsatTransaction!]!
  }

  extend type Mutation {
    createSupportCsatTransaction(tenantId: String!, code: String!, name: String!): SupportCsatTransaction!
    deleteSupportCsatTransaction(id: ID!): Boolean!
  }
`;

export const SupportCsatTransactionGqlResolvers = {
  Query: {
    getSupportCsatTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
