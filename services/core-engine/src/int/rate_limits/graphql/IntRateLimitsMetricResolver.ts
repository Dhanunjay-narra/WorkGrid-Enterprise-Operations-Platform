export const IntRateLimitsMetricGqlTypeDefs = `
  type IntRateLimitsMetric {
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
    getIntRateLimitsMetric(id: ID!): IntRateLimitsMetric
    listIntRateLimitsMetrics(tenantId: String!, limit: Int): [IntRateLimitsMetric!]!
  }

  extend type Mutation {
    createIntRateLimitsMetric(tenantId: String!, code: String!, name: String!): IntRateLimitsMetric!
    deleteIntRateLimitsMetric(id: ID!): Boolean!
  }
`;

export const IntRateLimitsMetricGqlResolvers = {
  Query: {
    getIntRateLimitsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
