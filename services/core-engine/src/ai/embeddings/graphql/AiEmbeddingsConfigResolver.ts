export const AiEmbeddingsConfigGqlTypeDefs = `
  type AiEmbeddingsConfig {
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
    getAiEmbeddingsConfig(id: ID!): AiEmbeddingsConfig
    listAiEmbeddingsConfigs(tenantId: String!, limit: Int): [AiEmbeddingsConfig!]!
  }

  extend type Mutation {
    createAiEmbeddingsConfig(tenantId: String!, code: String!, name: String!): AiEmbeddingsConfig!
    deleteAiEmbeddingsConfig(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsConfigGqlResolvers = {
  Query: {
    getAiEmbeddingsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
