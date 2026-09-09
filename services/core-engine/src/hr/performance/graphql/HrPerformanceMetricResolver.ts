export const HrPerformanceMetricGqlTypeDefs = `
  type HrPerformanceMetric {
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
    getHrPerformanceMetric(id: ID!): HrPerformanceMetric
    listHrPerformanceMetrics(tenantId: String!, limit: Int): [HrPerformanceMetric!]!
  }

  extend type Mutation {
    createHrPerformanceMetric(tenantId: String!, code: String!, name: String!): HrPerformanceMetric!
    deleteHrPerformanceMetric(id: ID!): Boolean!
  }
`;

export const HrPerformanceMetricGqlResolvers = {
  Query: {
    getHrPerformanceMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
