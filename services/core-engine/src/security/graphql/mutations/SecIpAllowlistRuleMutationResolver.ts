export const SecIpAllowlistRuleMutationTypeDefs = `
  input CreateSecIpAllowlistRuleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecIpAllowlistRule(input: CreateSecIpAllowlistRuleInput!): SecIpAllowlistRule!
    deleteSecIpAllowlistRule(id: ID!): Boolean!
  }
`;

export const SecIpAllowlistRuleMutationResolvers = {
  Mutation: {
    createSecIpAllowlistRule: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecIpAllowlistRule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
