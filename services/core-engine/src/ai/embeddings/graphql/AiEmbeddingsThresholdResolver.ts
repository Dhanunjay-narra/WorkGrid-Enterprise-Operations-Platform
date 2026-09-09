export const AiEmbeddingsThresholdGqlTypeDefs = `
  type AiEmbeddingsThreshold {
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
    getAiEmbeddingsThreshold(id: ID!): AiEmbeddingsThreshold
    listAiEmbeddingsThresholds(tenantId: String!, limit: Int): [AiEmbeddingsThreshold!]!
  }

  extend type Mutation {
    createAiEmbeddingsThreshold(tenantId: String!, code: String!, name: String!): AiEmbeddingsThreshold!
    deleteAiEmbeddingsThreshold(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsThresholdGqlResolvers = {
  Query: {
    getAiEmbeddingsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
