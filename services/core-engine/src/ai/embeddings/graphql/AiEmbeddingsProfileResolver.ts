export const AiEmbeddingsProfileGqlTypeDefs = `
  type AiEmbeddingsProfile {
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
    getAiEmbeddingsProfile(id: ID!): AiEmbeddingsProfile
    listAiEmbeddingsProfiles(tenantId: String!, limit: Int): [AiEmbeddingsProfile!]!
  }

  extend type Mutation {
    createAiEmbeddingsProfile(tenantId: String!, code: String!, name: String!): AiEmbeddingsProfile!
    deleteAiEmbeddingsProfile(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsProfileGqlResolvers = {
  Query: {
    getAiEmbeddingsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
