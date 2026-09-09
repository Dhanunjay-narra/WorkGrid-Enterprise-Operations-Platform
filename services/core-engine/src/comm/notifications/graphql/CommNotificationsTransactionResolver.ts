export const CommNotificationsTransactionGqlTypeDefs = `
  type CommNotificationsTransaction {
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
    getCommNotificationsTransaction(id: ID!): CommNotificationsTransaction
    listCommNotificationsTransactions(tenantId: String!, limit: Int): [CommNotificationsTransaction!]!
  }

  extend type Mutation {
    createCommNotificationsTransaction(tenantId: String!, code: String!, name: String!): CommNotificationsTransaction!
    deleteCommNotificationsTransaction(id: ID!): Boolean!
  }
`;

export const CommNotificationsTransactionGqlResolvers = {
  Query: {
    getCommNotificationsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
