export const AiModelFallbackLogMutationTypeDefs = `
  input CreateAiModelFallbackLogInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiModelFallbackLog(input: CreateAiModelFallbackLogInput!): AiModelFallbackLog!
    deleteAiModelFallbackLog(id: ID!): Boolean!
  }
`;

export const AiModelFallbackLogMutationResolvers = {
  Mutation: {
    createAiModelFallbackLog: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiModelFallbackLog: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
