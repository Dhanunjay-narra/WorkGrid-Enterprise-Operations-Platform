export const AbacTransactionGqlTypeDefs = `
  type AbacTransaction {
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
    getAbacTransaction(id: ID!): AbacTransaction
    listAbacTransactions(tenantId: String!, limit: Int): [AbacTransaction!]!
  }

  extend type Mutation {
    createAbacTransaction(tenantId: String!, code: String!, name: String!): AbacTransaction!
    deleteAbacTransaction(id: ID!): Boolean!
  }
`;

export const AbacTransactionGqlResolvers = {
  Query: {
    getAbacTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
