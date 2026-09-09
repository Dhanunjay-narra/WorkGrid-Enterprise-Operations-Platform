export const AiEmbeddingsNodeGqlTypeDefs = `
  type AiEmbeddingsNode {
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
    getAiEmbeddingsNode(id: ID!): AiEmbeddingsNode
    listAiEmbeddingsNodes(tenantId: String!, limit: Int): [AiEmbeddingsNode!]!
  }

  extend type Mutation {
    createAiEmbeddingsNode(tenantId: String!, code: String!, name: String!): AiEmbeddingsNode!
    deleteAiEmbeddingsNode(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsNodeGqlResolvers = {
  Query: {
    getAiEmbeddingsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
