export const ObsMetricsTransactionGqlTypeDefs = `
  type ObsMetricsTransaction {
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
    getObsMetricsTransaction(id: ID!): ObsMetricsTransaction
    listObsMetricsTransactions(tenantId: String!, limit: Int): [ObsMetricsTransaction!]!
  }

  extend type Mutation {
    createObsMetricsTransaction(tenantId: String!, code: String!, name: String!): ObsMetricsTransaction!
    deleteObsMetricsTransaction(id: ID!): Boolean!
  }
`;

export const ObsMetricsTransactionGqlResolvers = {
  Query: {
    getObsMetricsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
