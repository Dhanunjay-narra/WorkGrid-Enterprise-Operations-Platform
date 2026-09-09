export const AiEmbeddingsSummaryGqlTypeDefs = `
  type AiEmbeddingsSummary {
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
    getAiEmbeddingsSummary(id: ID!): AiEmbeddingsSummary
    listAiEmbeddingsSummarys(tenantId: String!, limit: Int): [AiEmbeddingsSummary!]!
  }

  extend type Mutation {
    createAiEmbeddingsSummary(tenantId: String!, code: String!, name: String!): AiEmbeddingsSummary!
    deleteAiEmbeddingsSummary(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsSummaryGqlResolvers = {
  Query: {
    getAiEmbeddingsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
