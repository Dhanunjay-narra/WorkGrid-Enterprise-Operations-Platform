export const AiEvaluationsMetricGqlTypeDefs = `
  type AiEvaluationsMetric {
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
    getAiEvaluationsMetric(id: ID!): AiEvaluationsMetric
    listAiEvaluationsMetrics(tenantId: String!, limit: Int): [AiEvaluationsMetric!]!
  }

  extend type Mutation {
    createAiEvaluationsMetric(tenantId: String!, code: String!, name: String!): AiEvaluationsMetric!
    deleteAiEvaluationsMetric(id: ID!): Boolean!
  }
`;

export const AiEvaluationsMetricGqlResolvers = {
  Query: {
    getAiEvaluationsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
