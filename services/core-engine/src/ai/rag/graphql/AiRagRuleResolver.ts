export const AiRagRuleGqlTypeDefs = `
  type AiRagRule {
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
    getAiRagRule(id: ID!): AiRagRule
    listAiRagRules(tenantId: String!, limit: Int): [AiRagRule!]!
  }

  extend type Mutation {
    createAiRagRule(tenantId: String!, code: String!, name: String!): AiRagRule!
    deleteAiRagRule(id: ID!): Boolean!
  }
`;

export const AiRagRuleGqlResolvers = {
  Query: {
    getAiRagRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
