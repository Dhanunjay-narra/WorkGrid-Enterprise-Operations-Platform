export const AiMemoryRuleGqlTypeDefs = `
  type AiMemoryRule {
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
    getAiMemoryRule(id: ID!): AiMemoryRule
    listAiMemoryRules(tenantId: String!, limit: Int): [AiMemoryRule!]!
  }

  extend type Mutation {
    createAiMemoryRule(tenantId: String!, code: String!, name: String!): AiMemoryRule!
    deleteAiMemoryRule(id: ID!): Boolean!
  }
`;

export const AiMemoryRuleGqlResolvers = {
  Query: {
    getAiMemoryRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
