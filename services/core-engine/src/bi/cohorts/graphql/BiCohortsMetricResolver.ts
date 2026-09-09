export const BiCohortsMetricGqlTypeDefs = `
  type BiCohortsMetric {
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
    getBiCohortsMetric(id: ID!): BiCohortsMetric
    listBiCohortsMetrics(tenantId: String!, limit: Int): [BiCohortsMetric!]!
  }

  extend type Mutation {
    createBiCohortsMetric(tenantId: String!, code: String!, name: String!): BiCohortsMetric!
    deleteBiCohortsMetric(id: ID!): Boolean!
  }
`;

export const BiCohortsMetricGqlResolvers = {
  Query: {
    getBiCohortsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
