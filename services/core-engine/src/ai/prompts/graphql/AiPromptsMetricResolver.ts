export const AiPromptsMetricGqlTypeDefs = `
  type AiPromptsMetric {
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
    getAiPromptsMetric(id: ID!): AiPromptsMetric
    listAiPromptsMetrics(tenantId: String!, limit: Int): [AiPromptsMetric!]!
  }

  extend type Mutation {
    createAiPromptsMetric(tenantId: String!, code: String!, name: String!): AiPromptsMetric!
    deleteAiPromptsMetric(id: ID!): Boolean!
  }
`;

export const AiPromptsMetricGqlResolvers = {
  Query: {
    getAiPromptsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
