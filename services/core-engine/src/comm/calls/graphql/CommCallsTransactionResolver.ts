export const CommCallsTransactionGqlTypeDefs = `
  type CommCallsTransaction {
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
    getCommCallsTransaction(id: ID!): CommCallsTransaction
    listCommCallsTransactions(tenantId: String!, limit: Int): [CommCallsTransaction!]!
  }

  extend type Mutation {
    createCommCallsTransaction(tenantId: String!, code: String!, name: String!): CommCallsTransaction!
    deleteCommCallsTransaction(id: ID!): Boolean!
  }
`;

export const CommCallsTransactionGqlResolvers = {
  Query: {
    getCommCallsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
