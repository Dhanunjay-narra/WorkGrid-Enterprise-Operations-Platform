export const SupportQueuesTransactionGqlTypeDefs = `
  type SupportQueuesTransaction {
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
    getSupportQueuesTransaction(id: ID!): SupportQueuesTransaction
    listSupportQueuesTransactions(tenantId: String!, limit: Int): [SupportQueuesTransaction!]!
  }

  extend type Mutation {
    createSupportQueuesTransaction(tenantId: String!, code: String!, name: String!): SupportQueuesTransaction!
    deleteSupportQueuesTransaction(id: ID!): Boolean!
  }
`;

export const SupportQueuesTransactionGqlResolvers = {
  Query: {
    getSupportQueuesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
