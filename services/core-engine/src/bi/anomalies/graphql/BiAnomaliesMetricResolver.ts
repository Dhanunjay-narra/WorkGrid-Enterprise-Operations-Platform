export const BiAnomaliesMetricGqlTypeDefs = `
  type BiAnomaliesMetric {
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
    getBiAnomaliesMetric(id: ID!): BiAnomaliesMetric
    listBiAnomaliesMetrics(tenantId: String!, limit: Int): [BiAnomaliesMetric!]!
  }

  extend type Mutation {
    createBiAnomaliesMetric(tenantId: String!, code: String!, name: String!): BiAnomaliesMetric!
    deleteBiAnomaliesMetric(id: ID!): Boolean!
  }
`;

export const BiAnomaliesMetricGqlResolvers = {
  Query: {
    getBiAnomaliesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
