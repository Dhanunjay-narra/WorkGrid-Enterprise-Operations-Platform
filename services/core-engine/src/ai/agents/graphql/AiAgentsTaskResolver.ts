export const AiAgentsTaskGqlTypeDefs = `
  type AiAgentsTask {
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
    getAiAgentsTask(id: ID!): AiAgentsTask
    listAiAgentsTasks(tenantId: String!, limit: Int): [AiAgentsTask!]!
  }

  extend type Mutation {
    createAiAgentsTask(tenantId: String!, code: String!, name: String!): AiAgentsTask!
    deleteAiAgentsTask(id: ID!): Boolean!
  }
`;

export const AiAgentsTaskGqlResolvers = {
  Query: {
    getAiAgentsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
