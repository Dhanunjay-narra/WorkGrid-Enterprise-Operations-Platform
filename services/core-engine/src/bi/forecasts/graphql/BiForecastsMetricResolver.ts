export const BiForecastsMetricGqlTypeDefs = `
  type BiForecastsMetric {
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
    getBiForecastsMetric(id: ID!): BiForecastsMetric
    listBiForecastsMetrics(tenantId: String!, limit: Int): [BiForecastsMetric!]!
  }

  extend type Mutation {
    createBiForecastsMetric(tenantId: String!, code: String!, name: String!): BiForecastsMetric!
    deleteBiForecastsMetric(id: ID!): Boolean!
  }
`;

export const BiForecastsMetricGqlResolvers = {
  Query: {
    getBiForecastsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
