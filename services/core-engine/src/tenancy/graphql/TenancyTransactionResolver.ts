export const TenancyTransactionGqlTypeDefs = `
  type TenancyTransaction {
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
    getTenancyTransaction(id: ID!): TenancyTransaction
    listTenancyTransactions(tenantId: String!, limit: Int): [TenancyTransaction!]!
  }

  extend type Mutation {
    createTenancyTransaction(tenantId: String!, code: String!, name: String!): TenancyTransaction!
    deleteTenancyTransaction(id: ID!): Boolean!
  }
`;

export const TenancyTransactionGqlResolvers = {
  Query: {
    getTenancyTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
