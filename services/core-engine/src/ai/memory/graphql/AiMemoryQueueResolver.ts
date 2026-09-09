export const AiMemoryQueueGqlTypeDefs = `
  type AiMemoryQueue {
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
    getAiMemoryQueue(id: ID!): AiMemoryQueue
    listAiMemoryQueues(tenantId: String!, limit: Int): [AiMemoryQueue!]!
  }

  extend type Mutation {
    createAiMemoryQueue(tenantId: String!, code: String!, name: String!): AiMemoryQueue!
    deleteAiMemoryQueue(id: ID!): Boolean!
  }
`;

export const AiMemoryQueueGqlResolvers = {
  Query: {
    getAiMemoryQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
