export const SecSecurityPolicyMutationTypeDefs = `
  input CreateSecSecurityPolicyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecSecurityPolicy(input: CreateSecSecurityPolicyInput!): SecSecurityPolicy!
    deleteSecSecurityPolicy(id: ID!): Boolean!
  }
`;

export const SecSecurityPolicyMutationResolvers = {
  Mutation: {
    createSecSecurityPolicy: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecSecurityPolicy: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
