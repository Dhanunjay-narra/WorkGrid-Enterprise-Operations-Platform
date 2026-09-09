export const AiEmbeddingsPolicyGqlTypeDefs = `
  type AiEmbeddingsPolicy {
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
    getAiEmbeddingsPolicy(id: ID!): AiEmbeddingsPolicy
    listAiEmbeddingsPolicys(tenantId: String!, limit: Int): [AiEmbeddingsPolicy!]!
  }

  extend type Mutation {
    createAiEmbeddingsPolicy(tenantId: String!, code: String!, name: String!): AiEmbeddingsPolicy!
    deleteAiEmbeddingsPolicy(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsPolicyGqlResolvers = {
  Query: {
    getAiEmbeddingsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
