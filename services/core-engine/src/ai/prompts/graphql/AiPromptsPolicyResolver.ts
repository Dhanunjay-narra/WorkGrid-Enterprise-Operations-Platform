export const AiPromptsPolicyGqlTypeDefs = `
  type AiPromptsPolicy {
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
    getAiPromptsPolicy(id: ID!): AiPromptsPolicy
    listAiPromptsPolicys(tenantId: String!, limit: Int): [AiPromptsPolicy!]!
  }

  extend type Mutation {
    createAiPromptsPolicy(tenantId: String!, code: String!, name: String!): AiPromptsPolicy!
    deleteAiPromptsPolicy(id: ID!): Boolean!
  }
`;

export const AiPromptsPolicyGqlResolvers = {
  Query: {
    getAiPromptsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
