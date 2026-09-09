export const BiKpisMetricGqlTypeDefs = `
  type BiKpisMetric {
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
    getBiKpisMetric(id: ID!): BiKpisMetric
    listBiKpisMetrics(tenantId: String!, limit: Int): [BiKpisMetric!]!
  }

  extend type Mutation {
    createBiKpisMetric(tenantId: String!, code: String!, name: String!): BiKpisMetric!
    deleteBiKpisMetric(id: ID!): Boolean!
  }
`;

export const BiKpisMetricGqlResolvers = {
  Query: {
    getBiKpisMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
