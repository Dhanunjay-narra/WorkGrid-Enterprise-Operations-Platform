export const AiRagMetricGqlTypeDefs = `
  type AiRagMetric {
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
    getAiRagMetric(id: ID!): AiRagMetric
    listAiRagMetrics(tenantId: String!, limit: Int): [AiRagMetric!]!
  }

  extend type Mutation {
    createAiRagMetric(tenantId: String!, code: String!, name: String!): AiRagMetric!
    deleteAiRagMetric(id: ID!): Boolean!
  }
`;

export const AiRagMetricGqlResolvers = {
  Query: {
    getAiRagMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
