export const AiEvaluationsQueueGqlTypeDefs = `
  type AiEvaluationsQueue {
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
    getAiEvaluationsQueue(id: ID!): AiEvaluationsQueue
    listAiEvaluationsQueues(tenantId: String!, limit: Int): [AiEvaluationsQueue!]!
  }

  extend type Mutation {
    createAiEvaluationsQueue(tenantId: String!, code: String!, name: String!): AiEvaluationsQueue!
    deleteAiEvaluationsQueue(id: ID!): Boolean!
  }
`;

export const AiEvaluationsQueueGqlResolvers = {
  Query: {
    getAiEvaluationsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
