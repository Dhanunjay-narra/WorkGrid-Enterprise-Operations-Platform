export const SecRateLimitCounterMutationTypeDefs = `
  input CreateSecRateLimitCounterInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecRateLimitCounter(input: CreateSecRateLimitCounterInput!): SecRateLimitCounter!
    deleteSecRateLimitCounter(id: ID!): Boolean!
  }
`;

export const SecRateLimitCounterMutationResolvers = {
  Mutation: {
    createSecRateLimitCounter: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecRateLimitCounter: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
