export const BiKpiMetricTypeDefs = `
  type BiKpiMetric {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiKpiMetric(id: ID!): BiKpiMetric
    listBiKpiMetrics(tenantId: String!): [BiKpiMetric!]!
  }
`;

export const BiKpiMetricResolvers = {
  Query: {
    getBiKpiMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiKpiMetric", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiKpiMetrics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiKpiMetric", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
