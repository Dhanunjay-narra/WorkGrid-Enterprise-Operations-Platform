export const AiModelRoutingRuleTypeDefs = `
  type AiModelRoutingRule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiModelRoutingRule(id: ID!): AiModelRoutingRule
    listAiModelRoutingRules(tenantId: String!): [AiModelRoutingRule!]!
  }
`;

export const AiModelRoutingRuleResolvers = {
  Query: {
    getAiModelRoutingRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiModelRoutingRule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiModelRoutingRules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiModelRoutingRule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
