export const PrjRiskItemMutationTypeDefs = `
  input CreatePrjRiskItemInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjRiskItem(input: CreatePrjRiskItemInput!): PrjRiskItem!
    deletePrjRiskItem(id: ID!): Boolean!
  }
`;

export const PrjRiskItemMutationResolvers = {
  Mutation: {
    createPrjRiskItem: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjRiskItem: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
