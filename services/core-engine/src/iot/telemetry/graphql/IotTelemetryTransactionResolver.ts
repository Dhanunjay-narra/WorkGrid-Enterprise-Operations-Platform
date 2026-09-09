export const IotTelemetryTransactionGqlTypeDefs = `
  type IotTelemetryTransaction {
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
    getIotTelemetryTransaction(id: ID!): IotTelemetryTransaction
    listIotTelemetryTransactions(tenantId: String!, limit: Int): [IotTelemetryTransaction!]!
  }

  extend type Mutation {
    createIotTelemetryTransaction(tenantId: String!, code: String!, name: String!): IotTelemetryTransaction!
    deleteIotTelemetryTransaction(id: ID!): Boolean!
  }
`;

export const IotTelemetryTransactionGqlResolvers = {
  Query: {
    getIotTelemetryTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
