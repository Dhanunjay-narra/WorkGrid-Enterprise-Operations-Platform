export const CommThreadsTransactionGqlTypeDefs = `
  type CommThreadsTransaction {
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
    getCommThreadsTransaction(id: ID!): CommThreadsTransaction
    listCommThreadsTransactions(tenantId: String!, limit: Int): [CommThreadsTransaction!]!
  }

  extend type Mutation {
    createCommThreadsTransaction(tenantId: String!, code: String!, name: String!): CommThreadsTransaction!
    deleteCommThreadsTransaction(id: ID!): Boolean!
  }
`;

export const CommThreadsTransactionGqlResolvers = {
  Query: {
    getCommThreadsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
