export const SupKnowledgeArticleTypeDefs = `
  type SupKnowledgeArticle {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupKnowledgeArticle(id: ID!): SupKnowledgeArticle
    listSupKnowledgeArticles(tenantId: String!): [SupKnowledgeArticle!]!
  }
`;

export const SupKnowledgeArticleResolvers = {
  Query: {
    getSupKnowledgeArticle: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupKnowledgeArticle", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupKnowledgeArticles: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupKnowledgeArticle", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
