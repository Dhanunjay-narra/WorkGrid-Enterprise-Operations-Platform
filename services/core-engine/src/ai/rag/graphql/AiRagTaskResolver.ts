export const AiRagTaskGqlTypeDefs = `
  type AiRagTask {
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
    getAiRagTask(id: ID!): AiRagTask
    listAiRagTasks(tenantId: String!, limit: Int): [AiRagTask!]!
  }

  extend type Mutation {
    createAiRagTask(tenantId: String!, code: String!, name: String!): AiRagTask!
    deleteAiRagTask(id: ID!): Boolean!
  }
`;

export const AiRagTaskGqlResolvers = {
  Query: {
    getAiRagTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
