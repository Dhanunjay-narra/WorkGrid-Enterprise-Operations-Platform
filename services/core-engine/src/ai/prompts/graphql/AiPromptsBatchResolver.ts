export const AiPromptsBatchGqlTypeDefs = `
  type AiPromptsBatch {
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
    getAiPromptsBatch(id: ID!): AiPromptsBatch
    listAiPromptsBatchs(tenantId: String!, limit: Int): [AiPromptsBatch!]!
  }

  extend type Mutation {
    createAiPromptsBatch(tenantId: String!, code: String!, name: String!): AiPromptsBatch!
    deleteAiPromptsBatch(id: ID!): Boolean!
  }
`;

export const AiPromptsBatchGqlResolvers = {
  Query: {
    getAiPromptsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
