export const AiVectorEmbeddingMutationTypeDefs = `
  input CreateAiVectorEmbeddingInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiVectorEmbedding(input: CreateAiVectorEmbeddingInput!): AiVectorEmbedding!
    deleteAiVectorEmbedding(id: ID!): Boolean!
  }
`;

export const AiVectorEmbeddingMutationResolvers = {
  Mutation: {
    createAiVectorEmbedding: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiVectorEmbedding: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
