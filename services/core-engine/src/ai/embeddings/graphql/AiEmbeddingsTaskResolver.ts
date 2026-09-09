export const AiEmbeddingsTaskGqlTypeDefs = `
  type AiEmbeddingsTask {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getAiEmbeddingsTask(id: ID!): AiEmbeddingsTask
    listAiEmbeddingsTasks(tenantId: String!, limit: Int): [AiEmbeddingsTask!]!
  }

  extend type Mutation {
    createAiEmbeddingsTask(tenantId: String!, code: String!, name: String!): AiEmbeddingsTask!
    deleteAiEmbeddingsTask(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsTaskGqlResolvers = {
  Query: {
    getAiEmbeddingsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
