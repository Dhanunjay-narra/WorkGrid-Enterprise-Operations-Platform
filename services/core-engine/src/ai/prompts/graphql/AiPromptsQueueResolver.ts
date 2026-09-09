export const AiPromptsQueueGqlTypeDefs = `
  type AiPromptsQueue {
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
    getAiPromptsQueue(id: ID!): AiPromptsQueue
    listAiPromptsQueues(tenantId: String!, limit: Int): [AiPromptsQueue!]!
  }

  extend type Mutation {
    createAiPromptsQueue(tenantId: String!, code: String!, name: String!): AiPromptsQueue!
    deleteAiPromptsQueue(id: ID!): Boolean!
  }
`;

export const AiPromptsQueueGqlResolvers = {
  Query: {
    getAiPromptsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
