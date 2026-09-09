export const AiEmbeddingsMetricGqlTypeDefs = `
  type AiEmbeddingsMetric {
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
    getAiEmbeddingsMetric(id: ID!): AiEmbeddingsMetric
    listAiEmbeddingsMetrics(tenantId: String!, limit: Int): [AiEmbeddingsMetric!]!
  }

  extend type Mutation {
    createAiEmbeddingsMetric(tenantId: String!, code: String!, name: String!): AiEmbeddingsMetric!
    deleteAiEmbeddingsMetric(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsMetricGqlResolvers = {
  Query: {
    getAiEmbeddingsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
