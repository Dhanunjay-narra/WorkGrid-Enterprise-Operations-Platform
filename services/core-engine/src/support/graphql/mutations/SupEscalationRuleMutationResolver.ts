export const SupEscalationRuleMutationTypeDefs = `
  input CreateSupEscalationRuleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupEscalationRule(input: CreateSupEscalationRuleInput!): SupEscalationRule!
    deleteSupEscalationRule(id: ID!): Boolean!
  }
`;

export const SupEscalationRuleMutationResolvers = {
  Mutation: {
    createSupEscalationRule: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupEscalationRule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
