export const InvItemCategoryMutationTypeDefs = `
  input CreateInvItemCategoryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvItemCategory(input: CreateInvItemCategoryInput!): InvItemCategory!
    deleteInvItemCategory(id: ID!): Boolean!
  }
`;

export const InvItemCategoryMutationResolvers = {
  Mutation: {
    createInvItemCategory: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvItemCategory: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
