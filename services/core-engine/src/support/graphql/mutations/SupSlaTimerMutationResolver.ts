export const SupSlaTimerMutationTypeDefs = `
  input CreateSupSlaTimerInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupSlaTimer(input: CreateSupSlaTimerInput!): SupSlaTimer!
    deleteSupSlaTimer(id: ID!): Boolean!
  }
`;

export const SupSlaTimerMutationResolvers = {
  Mutation: {
    createSupSlaTimer: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupSlaTimer: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
