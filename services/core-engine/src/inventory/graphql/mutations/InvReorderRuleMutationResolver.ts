export const InvReorderRuleMutationTypeDefs = `
  input CreateInvReorderRuleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvReorderRule(input: CreateInvReorderRuleInput!): InvReorderRule!
    deleteInvReorderRule(id: ID!): Boolean!
  }
`;

export const InvReorderRuleMutationResolvers = {
  Mutation: {
    createInvReorderRule: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvReorderRule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
