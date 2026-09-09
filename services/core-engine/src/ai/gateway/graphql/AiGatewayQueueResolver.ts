export const AiGatewayQueueGqlTypeDefs = `
  type AiGatewayQueue {
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
    getAiGatewayQueue(id: ID!): AiGatewayQueue
    listAiGatewayQueues(tenantId: String!, limit: Int): [AiGatewayQueue!]!
  }

  extend type Mutation {
    createAiGatewayQueue(tenantId: String!, code: String!, name: String!): AiGatewayQueue!
    deleteAiGatewayQueue(id: ID!): Boolean!
  }
`;

export const AiGatewayQueueGqlResolvers = {
  Query: {
    getAiGatewayQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
