export const SecPiiMaskingRuleMutationTypeDefs = `
  input CreateSecPiiMaskingRuleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecPiiMaskingRule(input: CreateSecPiiMaskingRuleInput!): SecPiiMaskingRule!
    deleteSecPiiMaskingRule(id: ID!): Boolean!
  }
`;

export const SecPiiMaskingRuleMutationResolvers = {
  Mutation: {
    createSecPiiMaskingRule: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecPiiMaskingRule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
