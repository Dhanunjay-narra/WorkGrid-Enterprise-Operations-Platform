export const AiEmbeddingsMappingGqlTypeDefs = `
  type AiEmbeddingsMapping {
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
    getAiEmbeddingsMapping(id: ID!): AiEmbeddingsMapping
    listAiEmbeddingsMappings(tenantId: String!, limit: Int): [AiEmbeddingsMapping!]!
  }

  extend type Mutation {
    createAiEmbeddingsMapping(tenantId: String!, code: String!, name: String!): AiEmbeddingsMapping!
    deleteAiEmbeddingsMapping(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsMappingGqlResolvers = {
  Query: {
    getAiEmbeddingsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
