export const IotAnomaliesTransactionGqlTypeDefs = `
  type IotAnomaliesTransaction {
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
    getIotAnomaliesTransaction(id: ID!): IotAnomaliesTransaction
    listIotAnomaliesTransactions(tenantId: String!, limit: Int): [IotAnomaliesTransaction!]!
  }

  extend type Mutation {
    createIotAnomaliesTransaction(tenantId: String!, code: String!, name: String!): IotAnomaliesTransaction!
    deleteIotAnomaliesTransaction(id: ID!): Boolean!
  }
`;

export const IotAnomaliesTransactionGqlResolvers = {
  Query: {
    getIotAnomaliesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
