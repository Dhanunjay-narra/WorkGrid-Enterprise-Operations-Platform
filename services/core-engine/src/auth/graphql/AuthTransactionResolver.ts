export const AuthTransactionGqlTypeDefs = `
  type AuthTransaction {
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
    getAuthTransaction(id: ID!): AuthTransaction
    listAuthTransactions(tenantId: String!, limit: Int): [AuthTransaction!]!
  }

  extend type Mutation {
    createAuthTransaction(tenantId: String!, code: String!, name: String!): AuthTransaction!
    deleteAuthTransaction(id: ID!): Boolean!
  }
`;

export const AuthTransactionGqlResolvers = {
  Query: {
    getAuthTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
