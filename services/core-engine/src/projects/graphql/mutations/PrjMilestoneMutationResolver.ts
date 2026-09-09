export const PrjMilestoneMutationTypeDefs = `
  input CreatePrjMilestoneInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjMilestone(input: CreatePrjMilestoneInput!): PrjMilestone!
    deletePrjMilestone(id: ID!): Boolean!
  }
`;

export const PrjMilestoneMutationResolvers = {
  Mutation: {
    createPrjMilestone: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjMilestone: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
