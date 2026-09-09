export const AiMemoryTaskGqlTypeDefs = `
  type AiMemoryTask {
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
    getAiMemoryTask(id: ID!): AiMemoryTask
    listAiMemoryTasks(tenantId: String!, limit: Int): [AiMemoryTask!]!
  }

  extend type Mutation {
    createAiMemoryTask(tenantId: String!, code: String!, name: String!): AiMemoryTask!
    deleteAiMemoryTask(id: ID!): Boolean!
  }
`;

export const AiMemoryTaskGqlResolvers = {
  Query: {
    getAiMemoryTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
