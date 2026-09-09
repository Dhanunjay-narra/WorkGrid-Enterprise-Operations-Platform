export const IntProviderRateLimitMutationTypeDefs = `
  input CreateIntProviderRateLimitInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntProviderRateLimit(input: CreateIntProviderRateLimitInput!): IntProviderRateLimit!
    deleteIntProviderRateLimit(id: ID!): Boolean!
  }
`;

export const IntProviderRateLimitMutationResolvers = {
  Mutation: {
    createIntProviderRateLimit: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntProviderRateLimit: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
