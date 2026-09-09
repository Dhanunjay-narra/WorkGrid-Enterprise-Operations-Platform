export const IntOauthTransactionGqlTypeDefs = `
  type IntOauthTransaction {
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
    getIntOauthTransaction(id: ID!): IntOauthTransaction
    listIntOauthTransactions(tenantId: String!, limit: Int): [IntOauthTransaction!]!
  }

  extend type Mutation {
    createIntOauthTransaction(tenantId: String!, code: String!, name: String!): IntOauthTransaction!
    deleteIntOauthTransaction(id: ID!): Boolean!
  }
`;

export const IntOauthTransactionGqlResolvers = {
  Query: {
    getIntOauthTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
