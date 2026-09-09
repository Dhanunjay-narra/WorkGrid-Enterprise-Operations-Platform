export const AiPromptsRuleGqlTypeDefs = `
  type AiPromptsRule {
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
    getAiPromptsRule(id: ID!): AiPromptsRule
    listAiPromptsRules(tenantId: String!, limit: Int): [AiPromptsRule!]!
  }

  extend type Mutation {
    createAiPromptsRule(tenantId: String!, code: String!, name: String!): AiPromptsRule!
    deleteAiPromptsRule(id: ID!): Boolean!
  }
`;

export const AiPromptsRuleGqlResolvers = {
  Query: {
    getAiPromptsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
