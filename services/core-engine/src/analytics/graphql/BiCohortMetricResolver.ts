export const BiCohortMetricTypeDefs = `
  type BiCohortMetric {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getBiCohortMetric(id: ID!): BiCohortMetric
    listBiCohortMetrics(tenantId: String!): [BiCohortMetric!]!
  }
`;

export const BiCohortMetricResolvers = {
  Query: {
    getBiCohortMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "BiCohortMetric", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listBiCohortMetrics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "BiCohortMetric", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
