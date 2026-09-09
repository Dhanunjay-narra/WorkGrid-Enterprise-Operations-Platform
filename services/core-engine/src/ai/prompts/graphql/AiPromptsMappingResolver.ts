export const AiPromptsMappingGqlTypeDefs = `
  type AiPromptsMapping {
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
    getAiPromptsMapping(id: ID!): AiPromptsMapping
    listAiPromptsMappings(tenantId: String!, limit: Int): [AiPromptsMapping!]!
  }

  extend type Mutation {
    createAiPromptsMapping(tenantId: String!, code: String!, name: String!): AiPromptsMapping!
    deleteAiPromptsMapping(id: ID!): Boolean!
  }
`;

export const AiPromptsMappingGqlResolvers = {
  Query: {
    getAiPromptsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
