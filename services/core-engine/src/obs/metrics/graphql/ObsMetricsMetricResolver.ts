export const ObsMetricsMetricGqlTypeDefs = `
  type ObsMetricsMetric {
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
    getObsMetricsMetric(id: ID!): ObsMetricsMetric
    listObsMetricsMetrics(tenantId: String!, limit: Int): [ObsMetricsMetric!]!
  }

  extend type Mutation {
    createObsMetricsMetric(tenantId: String!, code: String!, name: String!): ObsMetricsMetric!
    deleteObsMetricsMetric(id: ID!): Boolean!
  }
`;

export const ObsMetricsMetricGqlResolvers = {
  Query: {
    getObsMetricsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
