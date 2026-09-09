export const AiToolsRuleGqlTypeDefs = `
  type AiToolsRule {
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
    getAiToolsRule(id: ID!): AiToolsRule
    listAiToolsRules(tenantId: String!, limit: Int): [AiToolsRule!]!
  }

  extend type Mutation {
    createAiToolsRule(tenantId: String!, code: String!, name: String!): AiToolsRule!
    deleteAiToolsRule(id: ID!): Boolean!
  }
`;

export const AiToolsRuleGqlResolvers = {
  Query: {
    getAiToolsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
