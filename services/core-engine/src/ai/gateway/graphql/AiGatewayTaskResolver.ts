export const AiGatewayTaskGqlTypeDefs = `
  type AiGatewayTask {
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
    getAiGatewayTask(id: ID!): AiGatewayTask
    listAiGatewayTasks(tenantId: String!, limit: Int): [AiGatewayTask!]!
  }

  extend type Mutation {
    createAiGatewayTask(tenantId: String!, code: String!, name: String!): AiGatewayTask!
    deleteAiGatewayTask(id: ID!): Boolean!
  }
`;

export const AiGatewayTaskGqlResolvers = {
  Query: {
    getAiGatewayTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
