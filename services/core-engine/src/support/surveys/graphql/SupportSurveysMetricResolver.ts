export const SupportSurveysMetricGqlTypeDefs = `
  type SupportSurveysMetric {
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
    getSupportSurveysMetric(id: ID!): SupportSurveysMetric
    listSupportSurveysMetrics(tenantId: String!, limit: Int): [SupportSurveysMetric!]!
  }

  extend type Mutation {
    createSupportSurveysMetric(tenantId: String!, code: String!, name: String!): SupportSurveysMetric!
    deleteSupportSurveysMetric(id: ID!): Boolean!
  }
`;

export const SupportSurveysMetricGqlResolvers = {
  Query: {
    getSupportSurveysMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
