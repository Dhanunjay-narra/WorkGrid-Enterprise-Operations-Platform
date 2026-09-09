export const BiAggregatedDailyMetricTypeDefs = `
  type BiAggregatedDailyMetric {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiAggregatedDailyMetric(id: ID!): BiAggregatedDailyMetric
    listBiAggregatedDailyMetrics(tenantId: String!): [BiAggregatedDailyMetric!]!
  }
`;

export const BiAggregatedDailyMetricResolvers = {
  Query: {
    getBiAggregatedDailyMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiAggregatedDailyMetric", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiAggregatedDailyMetrics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiAggregatedDailyMetric", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
