export const AiPromptTemplateMutationTypeDefs = `
  input CreateAiPromptTemplateInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiPromptTemplate(input: CreateAiPromptTemplateInput!): AiPromptTemplate!
    deleteAiPromptTemplate(id: ID!): Boolean!
  }
`;

export const AiPromptTemplateMutationResolvers = {
  Mutation: {
    createAiPromptTemplate: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiPromptTemplate: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
