export const IotTelemetryMetricGqlTypeDefs = `
  type IotTelemetryMetric {
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
    getIotTelemetryMetric(id: ID!): IotTelemetryMetric
    listIotTelemetryMetrics(tenantId: String!, limit: Int): [IotTelemetryMetric!]!
  }

  extend type Mutation {
    createIotTelemetryMetric(tenantId: String!, code: String!, name: String!): IotTelemetryMetric!
    deleteIotTelemetryMetric(id: ID!): Boolean!
  }
`;

export const IotTelemetryMetricGqlResolvers = {
  Query: {
    getIotTelemetryMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
