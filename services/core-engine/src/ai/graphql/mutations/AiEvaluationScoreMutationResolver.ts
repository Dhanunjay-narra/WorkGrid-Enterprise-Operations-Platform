export const AiEvaluationScoreMutationTypeDefs = `
  input CreateAiEvaluationScoreInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiEvaluationScore(input: CreateAiEvaluationScoreInput!): AiEvaluationScore!
    deleteAiEvaluationScore(id: ID!): Boolean!
  }
`;

export const AiEvaluationScoreMutationResolvers = {
  Mutation: {
    createAiEvaluationScore: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiEvaluationScore: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
