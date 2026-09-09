export const SecurityTransactionGqlTypeDefs = `
  type SecurityTransaction {
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
    getSecurityTransaction(id: ID!): SecurityTransaction
    listSecurityTransactions(tenantId: String!, limit: Int): [SecurityTransaction!]!
  }

  extend type Mutation {
    createSecurityTransaction(tenantId: String!, code: String!, name: String!): SecurityTransaction!
    deleteSecurityTransaction(id: ID!): Boolean!
  }
`;

export const SecurityTransactionGqlResolvers = {
  Query: {
    getSecurityTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
