export const IotDevicesMetricGqlTypeDefs = `
  type IotDevicesMetric {
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
    getIotDevicesMetric(id: ID!): IotDevicesMetric
    listIotDevicesMetrics(tenantId: String!, limit: Int): [IotDevicesMetric!]!
  }

  extend type Mutation {
    createIotDevicesMetric(tenantId: String!, code: String!, name: String!): IotDevicesMetric!
    deleteIotDevicesMetric(id: ID!): Boolean!
  }
`;

export const IotDevicesMetricGqlResolvers = {
  Query: {
    getIotDevicesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
