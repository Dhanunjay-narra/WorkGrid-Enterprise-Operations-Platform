export const ObsDashboardsMetricGqlTypeDefs = `
  type ObsDashboardsMetric {
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
    getObsDashboardsMetric(id: ID!): ObsDashboardsMetric
    listObsDashboardsMetrics(tenantId: String!, limit: Int): [ObsDashboardsMetric!]!
  }

  extend type Mutation {
    createObsDashboardsMetric(tenantId: String!, code: String!, name: String!): ObsDashboardsMetric!
    deleteObsDashboardsMetric(id: ID!): Boolean!
  }
`;

export const ObsDashboardsMetricGqlResolvers = {
  Query: {
    getObsDashboardsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
