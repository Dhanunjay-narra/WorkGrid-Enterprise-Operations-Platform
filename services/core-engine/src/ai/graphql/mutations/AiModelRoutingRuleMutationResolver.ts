export const AiModelRoutingRuleMutationTypeDefs = `
  input CreateAiModelRoutingRuleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createAiModelRoutingRule(input: CreateAiModelRoutingRuleInput!): AiModelRoutingRule!
    deleteAiModelRoutingRule(id: ID!): Boolean!
  }
`;

export const AiModelRoutingRuleMutationResolvers = {
  Mutation: {
    createAiModelRoutingRule: async (_: any, args: { input: any }) => {
      return {
        id: "ai_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteAiModelRoutingRule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
