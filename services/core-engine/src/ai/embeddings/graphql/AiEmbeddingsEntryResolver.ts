export const AiEmbeddingsEntryGqlTypeDefs = `
  type AiEmbeddingsEntry {
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
    getAiEmbeddingsEntry(id: ID!): AiEmbeddingsEntry
    listAiEmbeddingsEntrys(tenantId: String!, limit: Int): [AiEmbeddingsEntry!]!
  }

  extend type Mutation {
    createAiEmbeddingsEntry(tenantId: String!, code: String!, name: String!): AiEmbeddingsEntry!
    deleteAiEmbeddingsEntry(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsEntryGqlResolvers = {
  Query: {
    getAiEmbeddingsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
