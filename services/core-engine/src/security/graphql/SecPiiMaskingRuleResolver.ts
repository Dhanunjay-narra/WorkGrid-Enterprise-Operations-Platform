export const SecPiiMaskingRuleTypeDefs = `
  type SecPiiMaskingRule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecPiiMaskingRule(id: ID!): SecPiiMaskingRule
    listSecPiiMaskingRules(tenantId: String!): [SecPiiMaskingRule!]!
  }
`;

export const SecPiiMaskingRuleResolvers = {
  Query: {
    getSecPiiMaskingRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecPiiMaskingRule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecPiiMaskingRules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecPiiMaskingRule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
