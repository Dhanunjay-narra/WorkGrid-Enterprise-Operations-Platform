export const CommDigestTransactionGqlTypeDefs = `
  type CommDigestTransaction {
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
    getCommDigestTransaction(id: ID!): CommDigestTransaction
    listCommDigestTransactions(tenantId: String!, limit: Int): [CommDigestTransaction!]!
  }

  extend type Mutation {
    createCommDigestTransaction(tenantId: String!, code: String!, name: String!): CommDigestTransaction!
    deleteCommDigestTransaction(id: ID!): Boolean!
  }
`;

export const CommDigestTransactionGqlResolvers = {
  Query: {
    getCommDigestTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
