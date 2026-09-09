export const AiRagQueueGqlTypeDefs = `
  type AiRagQueue {
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
    getAiRagQueue(id: ID!): AiRagQueue
    listAiRagQueues(tenantId: String!, limit: Int): [AiRagQueue!]!
  }

  extend type Mutation {
    createAiRagQueue(tenantId: String!, code: String!, name: String!): AiRagQueue!
    deleteAiRagQueue(id: ID!): Boolean!
  }
`;

export const AiRagQueueGqlResolvers = {
  Query: {
    getAiRagQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
