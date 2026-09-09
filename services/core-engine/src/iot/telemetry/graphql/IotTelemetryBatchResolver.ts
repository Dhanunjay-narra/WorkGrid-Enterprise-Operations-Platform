export const IotTelemetryBatchGqlTypeDefs = `
  type IotTelemetryBatch {
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
    getIotTelemetryBatch(id: ID!): IotTelemetryBatch
    listIotTelemetryBatchs(tenantId: String!, limit: Int): [IotTelemetryBatch!]!
  }

  extend type Mutation {
    createIotTelemetryBatch(tenantId: String!, code: String!, name: String!): IotTelemetryBatch!
    deleteIotTelemetryBatch(id: ID!): Boolean!
  }
`;

export const IotTelemetryBatchGqlResolvers = {
  Query: {
    getIotTelemetryBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
