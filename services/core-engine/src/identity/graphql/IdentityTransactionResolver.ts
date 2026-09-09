export const IdentityTransactionGqlTypeDefs = `
  type IdentityTransaction {
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
    getIdentityTransaction(id: ID!): IdentityTransaction
    listIdentityTransactions(tenantId: String!, limit: Int): [IdentityTransaction!]!
  }

  extend type Mutation {
    createIdentityTransaction(tenantId: String!, code: String!, name: String!): IdentityTransaction!
    deleteIdentityTransaction(id: ID!): Boolean!
  }
`;

export const IdentityTransactionGqlResolvers = {
  Query: {
    getIdentityTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
