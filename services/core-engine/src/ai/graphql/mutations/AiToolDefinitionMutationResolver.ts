export const AiToolDefinitionMutationTypeDefs = `
  input CreateAiToolDefinitionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiToolDefinition(input: CreateAiToolDefinitionInput!): AiToolDefinition!
    deleteAiToolDefinition(id: ID!): Boolean!
  }
`;

export const AiToolDefinitionMutationResolvers = {
  Mutation: {
    createAiToolDefinition: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiToolDefinition: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
