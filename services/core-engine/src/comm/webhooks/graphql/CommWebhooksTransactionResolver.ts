export const CommWebhooksTransactionGqlTypeDefs = `
  type CommWebhooksTransaction {
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
    getCommWebhooksTransaction(id: ID!): CommWebhooksTransaction
    listCommWebhooksTransactions(tenantId: String!, limit: Int): [CommWebhooksTransaction!]!
  }

  extend type Mutation {
    createCommWebhooksTransaction(tenantId: String!, code: String!, name: String!): CommWebhooksTransaction!
    deleteCommWebhooksTransaction(id: ID!): Boolean!
  }
`;

export const CommWebhooksTransactionGqlResolvers = {
  Query: {
    getCommWebhooksTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
