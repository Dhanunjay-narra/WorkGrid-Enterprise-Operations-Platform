export const BiDashboardsMetricGqlTypeDefs = `
  type BiDashboardsMetric {
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
    getBiDashboardsMetric(id: ID!): BiDashboardsMetric
    listBiDashboardsMetrics(tenantId: String!, limit: Int): [BiDashboardsMetric!]!
  }

  extend type Mutation {
    createBiDashboardsMetric(tenantId: String!, code: String!, name: String!): BiDashboardsMetric!
    deleteBiDashboardsMetric(id: ID!): Boolean!
  }
`;

export const BiDashboardsMetricGqlResolvers = {
  Query: {
    getBiDashboardsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
