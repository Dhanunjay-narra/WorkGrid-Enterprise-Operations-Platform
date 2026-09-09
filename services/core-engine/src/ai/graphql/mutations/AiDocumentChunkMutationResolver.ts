export const AiDocumentChunkMutationTypeDefs = `
  input CreateAiDocumentChunkInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiDocumentChunk(input: CreateAiDocumentChunkInput!): AiDocumentChunk!
    deleteAiDocumentChunk(id: ID!): Boolean!
  }
`;

export const AiDocumentChunkMutationResolvers = {
  Mutation: {
    createAiDocumentChunk: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiDocumentChunk: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
