export const IotTelemetryMetricTypeDefs = `
  type IotTelemetryMetric {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotTelemetryMetric(id: ID!): IotTelemetryMetric
    listIotTelemetryMetrics(tenantId: String!): [IotTelemetryMetric!]!
  }
`;

export const IotTelemetryMetricResolvers = {
  Query: {
    getIotTelemetryMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotTelemetryMetric", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotTelemetryMetrics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotTelemetryMetric", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
