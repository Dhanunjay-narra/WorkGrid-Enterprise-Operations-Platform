export const IotFirmwareMetricGqlTypeDefs = `
  type IotFirmwareMetric {
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
    getIotFirmwareMetric(id: ID!): IotFirmwareMetric
    listIotFirmwareMetrics(tenantId: String!, limit: Int): [IotFirmwareMetric!]!
  }

  extend type Mutation {
    createIotFirmwareMetric(tenantId: String!, code: String!, name: String!): IotFirmwareMetric!
    deleteIotFirmwareMetric(id: ID!): Boolean!
  }
`;

export const IotFirmwareMetricGqlResolvers = {
  Query: {
    getIotFirmwareMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
