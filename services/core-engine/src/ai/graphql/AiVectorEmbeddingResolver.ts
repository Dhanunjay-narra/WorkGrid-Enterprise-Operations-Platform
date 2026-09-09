export const AiVectorEmbeddingTypeDefs = `
  type AiVectorEmbedding {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiVectorEmbedding(id: ID!): AiVectorEmbedding
    listAiVectorEmbeddings(tenantId: String!): [AiVectorEmbedding!]!
  }
`;

export const AiVectorEmbeddingResolvers = {
  Query: {
    getAiVectorEmbedding: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiVectorEmbedding", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiVectorEmbeddings: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiVectorEmbedding", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
