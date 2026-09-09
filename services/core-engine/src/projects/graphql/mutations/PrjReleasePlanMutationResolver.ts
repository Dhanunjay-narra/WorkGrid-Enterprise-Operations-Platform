export const PrjReleasePlanMutationTypeDefs = `
  input CreatePrjReleasePlanInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjReleasePlan(input: CreatePrjReleasePlanInput!): PrjReleasePlan!
    deletePrjReleasePlan(id: ID!): Boolean!
  }
`;

export const PrjReleasePlanMutationResolvers = {
  Mutation: {
    createPrjReleasePlan: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjReleasePlan: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
