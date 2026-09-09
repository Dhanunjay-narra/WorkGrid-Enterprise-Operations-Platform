export const AiAgentsQueueGqlTypeDefs = `
  type AiAgentsQueue {
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
    getAiAgentsQueue(id: ID!): AiAgentsQueue
    listAiAgentsQueues(tenantId: String!, limit: Int): [AiAgentsQueue!]!
  }

  extend type Mutation {
    createAiAgentsQueue(tenantId: String!, code: String!, name: String!): AiAgentsQueue!
    deleteAiAgentsQueue(id: ID!): Boolean!
  }
`;

export const AiAgentsQueueGqlResolvers = {
  Query: {
    getAiAgentsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
