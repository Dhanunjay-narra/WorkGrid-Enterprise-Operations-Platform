export const AiPromptsConfigGqlTypeDefs = `
  type AiPromptsConfig {
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
    getAiPromptsConfig(id: ID!): AiPromptsConfig
    listAiPromptsConfigs(tenantId: String!, limit: Int): [AiPromptsConfig!]!
  }

  extend type Mutation {
    createAiPromptsConfig(tenantId: String!, code: String!, name: String!): AiPromptsConfig!
    deleteAiPromptsConfig(id: ID!): Boolean!
  }
`;

export const AiPromptsConfigGqlResolvers = {
  Query: {
    getAiPromptsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
