export const AiEmbeddingsStateGqlTypeDefs = `
  type AiEmbeddingsState {
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
    getAiEmbeddingsState(id: ID!): AiEmbeddingsState
    listAiEmbeddingsStates(tenantId: String!, limit: Int): [AiEmbeddingsState!]!
  }

  extend type Mutation {
    createAiEmbeddingsState(tenantId: String!, code: String!, name: String!): AiEmbeddingsState!
    deleteAiEmbeddingsState(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsStateGqlResolvers = {
  Query: {
    getAiEmbeddingsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
