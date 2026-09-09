export const BiQueriesMetricGqlTypeDefs = `
  type BiQueriesMetric {
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
    getBiQueriesMetric(id: ID!): BiQueriesMetric
    listBiQueriesMetrics(tenantId: String!, limit: Int): [BiQueriesMetric!]!
  }

  extend type Mutation {
    createBiQueriesMetric(tenantId: String!, code: String!, name: String!): BiQueriesMetric!
    deleteBiQueriesMetric(id: ID!): Boolean!
  }
`;

export const BiQueriesMetricGqlResolvers = {
  Query: {
    getBiQueriesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
