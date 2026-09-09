export const IntStripeTransactionGqlTypeDefs = `
  type IntStripeTransaction {
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
    getIntStripeTransaction(id: ID!): IntStripeTransaction
    listIntStripeTransactions(tenantId: String!, limit: Int): [IntStripeTransaction!]!
  }

  extend type Mutation {
    createIntStripeTransaction(tenantId: String!, code: String!, name: String!): IntStripeTransaction!
    deleteIntStripeTransaction(id: ID!): Boolean!
  }
`;

export const IntStripeTransactionGqlResolvers = {
  Query: {
    getIntStripeTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
