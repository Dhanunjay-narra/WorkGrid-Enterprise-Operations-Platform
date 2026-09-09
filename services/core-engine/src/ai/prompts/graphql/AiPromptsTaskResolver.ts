export const AiPromptsTaskGqlTypeDefs = `
  type AiPromptsTask {
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
    getAiPromptsTask(id: ID!): AiPromptsTask
    listAiPromptsTasks(tenantId: String!, limit: Int): [AiPromptsTask!]!
  }

  extend type Mutation {
    createAiPromptsTask(tenantId: String!, code: String!, name: String!): AiPromptsTask!
    deleteAiPromptsTask(id: ID!): Boolean!
  }
`;

export const AiPromptsTaskGqlResolvers = {
  Query: {
    getAiPromptsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
