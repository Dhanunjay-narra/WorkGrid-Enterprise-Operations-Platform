export const AiEvaluationsRuleGqlTypeDefs = `
  type AiEvaluationsRule {
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
    getAiEvaluationsRule(id: ID!): AiEvaluationsRule
    listAiEvaluationsRules(tenantId: String!, limit: Int): [AiEvaluationsRule!]!
  }

  extend type Mutation {
    createAiEvaluationsRule(tenantId: String!, code: String!, name: String!): AiEvaluationsRule!
    deleteAiEvaluationsRule(id: ID!): Boolean!
  }
`;

export const AiEvaluationsRuleGqlResolvers = {
  Query: {
    getAiEvaluationsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEvaluationsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
