export const BiWidgetsMetricGqlTypeDefs = `
  type BiWidgetsMetric {
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
    getBiWidgetsMetric(id: ID!): BiWidgetsMetric
    listBiWidgetsMetrics(tenantId: String!, limit: Int): [BiWidgetsMetric!]!
  }

  extend type Mutation {
    createBiWidgetsMetric(tenantId: String!, code: String!, name: String!): BiWidgetsMetric!
    deleteBiWidgetsMetric(id: ID!): Boolean!
  }
`;

export const BiWidgetsMetricGqlResolvers = {
  Query: {
    getBiWidgetsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
