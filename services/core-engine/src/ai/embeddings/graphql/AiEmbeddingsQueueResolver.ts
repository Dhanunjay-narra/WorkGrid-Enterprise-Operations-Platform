export const AiEmbeddingsQueueGqlTypeDefs = `
  type AiEmbeddingsQueue {
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
    getAiEmbeddingsQueue(id: ID!): AiEmbeddingsQueue
    listAiEmbeddingsQueues(tenantId: String!, limit: Int): [AiEmbeddingsQueue!]!
  }

  extend type Mutation {
    createAiEmbeddingsQueue(tenantId: String!, code: String!, name: String!): AiEmbeddingsQueue!
    deleteAiEmbeddingsQueue(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsQueueGqlResolvers = {
  Query: {
    getAiEmbeddingsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
