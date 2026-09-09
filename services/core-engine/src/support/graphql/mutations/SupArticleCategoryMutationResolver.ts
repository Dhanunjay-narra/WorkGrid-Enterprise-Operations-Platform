export const SupArticleCategoryMutationTypeDefs = `
  input CreateSupArticleCategoryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupArticleCategory(input: CreateSupArticleCategoryInput!): SupArticleCategory!
    deleteSupArticleCategory(id: ID!): Boolean!
  }
`;

export const SupArticleCategoryMutationResolvers = {
  Mutation: {
    createSupArticleCategory: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupArticleCategory: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
