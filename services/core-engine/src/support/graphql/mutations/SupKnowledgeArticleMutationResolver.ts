export const SupKnowledgeArticleMutationTypeDefs = `
  input CreateSupKnowledgeArticleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupKnowledgeArticle(input: CreateSupKnowledgeArticleInput!): SupKnowledgeArticle!
    deleteSupKnowledgeArticle(id: ID!): Boolean!
  }
`;

export const SupKnowledgeArticleMutationResolvers = {
  Mutation: {
    createSupKnowledgeArticle: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupKnowledgeArticle: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
