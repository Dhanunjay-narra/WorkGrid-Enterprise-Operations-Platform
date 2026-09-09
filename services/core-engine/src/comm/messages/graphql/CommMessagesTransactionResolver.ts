export const CommMessagesTransactionGqlTypeDefs = `
  type CommMessagesTransaction {
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
    getCommMessagesTransaction(id: ID!): CommMessagesTransaction
    listCommMessagesTransactions(tenantId: String!, limit: Int): [CommMessagesTransaction!]!
  }

  extend type Mutation {
    createCommMessagesTransaction(tenantId: String!, code: String!, name: String!): CommMessagesTransaction!
    deleteCommMessagesTransaction(id: ID!): Boolean!
  }
`;

export const CommMessagesTransactionGqlResolvers = {
  Query: {
    getCommMessagesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
