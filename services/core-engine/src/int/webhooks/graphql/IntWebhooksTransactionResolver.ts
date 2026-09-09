export const IntWebhooksTransactionGqlTypeDefs = `
  type IntWebhooksTransaction {
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
    getIntWebhooksTransaction(id: ID!): IntWebhooksTransaction
    listIntWebhooksTransactions(tenantId: String!, limit: Int): [IntWebhooksTransaction!]!
  }

  extend type Mutation {
    createIntWebhooksTransaction(tenantId: String!, code: String!, name: String!): IntWebhooksTransaction!
    deleteIntWebhooksTransaction(id: ID!): Boolean!
  }
`;

export const IntWebhooksTransactionGqlResolvers = {
  Query: {
    getIntWebhooksTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
