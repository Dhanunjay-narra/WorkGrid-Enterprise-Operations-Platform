export const InvSkuItemMutationTypeDefs = `
  input CreateInvSkuItemInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvSkuItem(input: CreateInvSkuItemInput!): InvSkuItem!
    deleteInvSkuItem(id: ID!): Boolean!
  }
`;

export const InvSkuItemMutationResolvers = {
  Mutation: {
    createInvSkuItem: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvSkuItem: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
