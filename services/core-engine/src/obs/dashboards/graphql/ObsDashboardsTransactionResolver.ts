export const ObsDashboardsTransactionGqlTypeDefs = `
  type ObsDashboardsTransaction {
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
    getObsDashboardsTransaction(id: ID!): ObsDashboardsTransaction
    listObsDashboardsTransactions(tenantId: String!, limit: Int): [ObsDashboardsTransaction!]!
  }

  extend type Mutation {
    createObsDashboardsTransaction(tenantId: String!, code: String!, name: String!): ObsDashboardsTransaction!
    deleteObsDashboardsTransaction(id: ID!): Boolean!
  }
`;

export const ObsDashboardsTransactionGqlResolvers = {
  Query: {
    getObsDashboardsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
