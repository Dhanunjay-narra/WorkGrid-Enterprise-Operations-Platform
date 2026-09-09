export const BiForecastsTransactionGqlTypeDefs = `
  type BiForecastsTransaction {
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
    getBiForecastsTransaction(id: ID!): BiForecastsTransaction
    listBiForecastsTransactions(tenantId: String!, limit: Int): [BiForecastsTransaction!]!
  }

  extend type Mutation {
    createBiForecastsTransaction(tenantId: String!, code: String!, name: String!): BiForecastsTransaction!
    deleteBiForecastsTransaction(id: ID!): Boolean!
  }
`;

export const BiForecastsTransactionGqlResolvers = {
  Query: {
    getBiForecastsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
