export const IntTransformationRuleMutationTypeDefs = `
  input CreateIntTransformationRuleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntTransformationRule(input: CreateIntTransformationRuleInput!): IntTransformationRule!
    deleteIntTransformationRule(id: ID!): Boolean!
  }
`;

export const IntTransformationRuleMutationResolvers = {
  Mutation: {
    createIntTransformationRule: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntTransformationRule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
