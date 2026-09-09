export const ObsLoggingTransactionGqlTypeDefs = `
  type ObsLoggingTransaction {
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
    getObsLoggingTransaction(id: ID!): ObsLoggingTransaction
    listObsLoggingTransactions(tenantId: String!, limit: Int): [ObsLoggingTransaction!]!
  }

  extend type Mutation {
    createObsLoggingTransaction(tenantId: String!, code: String!, name: String!): ObsLoggingTransaction!
    deleteObsLoggingTransaction(id: ID!): Boolean!
  }
`;

export const ObsLoggingTransactionGqlResolvers = {
  Query: {
    getObsLoggingTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
