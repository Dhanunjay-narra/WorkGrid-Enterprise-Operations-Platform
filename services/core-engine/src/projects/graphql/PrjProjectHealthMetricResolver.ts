export const PrjProjectHealthMetricTypeDefs = `
  type PrjProjectHealthMetric {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjProjectHealthMetric(id: ID!): PrjProjectHealthMetric
    listPrjProjectHealthMetrics(tenantId: String!): [PrjProjectHealthMetric!]!
  }
`;

export const PrjProjectHealthMetricResolvers = {
  Query: {
    getPrjProjectHealthMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjProjectHealthMetric", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjProjectHealthMetrics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjProjectHealthMetric", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
