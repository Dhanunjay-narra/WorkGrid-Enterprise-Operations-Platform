export const IntSyncTransactionGqlTypeDefs = `
  type IntSyncTransaction {
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
    getIntSyncTransaction(id: ID!): IntSyncTransaction
    listIntSyncTransactions(tenantId: String!, limit: Int): [IntSyncTransaction!]!
  }

  extend type Mutation {
    createIntSyncTransaction(tenantId: String!, code: String!, name: String!): IntSyncTransaction!
    deleteIntSyncTransaction(id: ID!): Boolean!
  }
`;

export const IntSyncTransactionGqlResolvers = {
  Query: {
    getIntSyncTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
