export const SupportSlaTransactionGqlTypeDefs = `
  type SupportSlaTransaction {
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
    getSupportSlaTransaction(id: ID!): SupportSlaTransaction
    listSupportSlaTransactions(tenantId: String!, limit: Int): [SupportSlaTransaction!]!
  }

  extend type Mutation {
    createSupportSlaTransaction(tenantId: String!, code: String!, name: String!): SupportSlaTransaction!
    deleteSupportSlaTransaction(id: ID!): Boolean!
  }
`;

export const SupportSlaTransactionGqlResolvers = {
  Query: {
    getSupportSlaTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
