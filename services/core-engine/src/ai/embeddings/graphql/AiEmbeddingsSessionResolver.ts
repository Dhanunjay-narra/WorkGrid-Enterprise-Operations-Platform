export const AiEmbeddingsSessionGqlTypeDefs = `
  type AiEmbeddingsSession {
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
    getAiEmbeddingsSession(id: ID!): AiEmbeddingsSession
    listAiEmbeddingsSessions(tenantId: String!, limit: Int): [AiEmbeddingsSession!]!
  }

  extend type Mutation {
    createAiEmbeddingsSession(tenantId: String!, code: String!, name: String!): AiEmbeddingsSession!
    deleteAiEmbeddingsSession(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsSessionGqlResolvers = {
  Query: {
    getAiEmbeddingsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
