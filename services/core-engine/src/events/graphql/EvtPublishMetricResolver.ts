export const EvtPublishMetricTypeDefs = `
  type EvtPublishMetric {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtPublishMetric(id: ID!): EvtPublishMetric
    listEvtPublishMetrics(tenantId: String!): [EvtPublishMetric!]!
  }
`;

export const EvtPublishMetricResolvers = {
  Query: {
    getEvtPublishMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtPublishMetric", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtPublishMetrics: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtPublishMetric", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
