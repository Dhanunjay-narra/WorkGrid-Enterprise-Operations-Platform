export const SupportKnowledgeRuleGqlTypeDefs = `
  type SupportKnowledgeRule {
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
    getSupportKnowledgeRule(id: ID!): SupportKnowledgeRule
    listSupportKnowledgeRules(tenantId: String!, limit: Int): [SupportKnowledgeRule!]!
  }

  extend type Mutation {
    createSupportKnowledgeRule(tenantId: String!, code: String!, name: String!): SupportKnowledgeRule!
    deleteSupportKnowledgeRule(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeRuleGqlResolvers = {
  Query: {
    getSupportKnowledgeRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
