export const SupportKnowledgeTaskGqlTypeDefs = `
  type SupportKnowledgeTask {
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
    getSupportKnowledgeTask(id: ID!): SupportKnowledgeTask
    listSupportKnowledgeTasks(tenantId: String!, limit: Int): [SupportKnowledgeTask!]!
  }

  extend type Mutation {
    createSupportKnowledgeTask(tenantId: String!, code: String!, name: String!): SupportKnowledgeTask!
    deleteSupportKnowledgeTask(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeTaskGqlResolvers = {
  Query: {
    getSupportKnowledgeTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
