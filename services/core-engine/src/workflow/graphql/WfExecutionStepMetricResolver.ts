export const WfExecutionStepMetricTypeDefs = `
  type WfExecutionStepMetric {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfExecutionStepMetric(id: ID!): WfExecutionStepMetric
    listWfExecutionStepMetrics(tenantId: String!): [WfExecutionStepMetric!]!
  }
`;

export const WfExecutionStepMetricResolvers = {
  Query: {
    getWfExecutionStepMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfExecutionStepMetric", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfExecutionStepMetrics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfExecutionStepMetric", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
