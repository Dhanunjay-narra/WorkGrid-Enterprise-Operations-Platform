export const CrmForecastingMetricGqlTypeDefs = `
  type CrmForecastingMetric {
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
    getCrmForecastingMetric(id: ID!): CrmForecastingMetric
    listCrmForecastingMetrics(tenantId: String!, limit: Int): [CrmForecastingMetric!]!
  }

  extend type Mutation {
    createCrmForecastingMetric(tenantId: String!, code: String!, name: String!): CrmForecastingMetric!
    deleteCrmForecastingMetric(id: ID!): Boolean!
  }
`;

export const CrmForecastingMetricGqlResolvers = {
  Query: {
    getCrmForecastingMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
