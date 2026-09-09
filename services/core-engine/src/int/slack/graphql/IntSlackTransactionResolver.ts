export const IntSlackTransactionGqlTypeDefs = `
  type IntSlackTransaction {
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
    getIntSlackTransaction(id: ID!): IntSlackTransaction
    listIntSlackTransactions(tenantId: String!, limit: Int): [IntSlackTransaction!]!
  }

  extend type Mutation {
    createIntSlackTransaction(tenantId: String!, code: String!, name: String!): IntSlackTransaction!
    deleteIntSlackTransaction(id: ID!): Boolean!
  }
`;

export const IntSlackTransactionGqlResolvers = {
  Query: {
    getIntSlackTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
