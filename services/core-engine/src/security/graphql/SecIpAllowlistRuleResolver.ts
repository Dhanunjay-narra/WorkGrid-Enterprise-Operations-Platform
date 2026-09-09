export const SecIpAllowlistRuleTypeDefs = `
  type SecIpAllowlistRule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecIpAllowlistRule(id: ID!): SecIpAllowlistRule
    listSecIpAllowlistRules(tenantId: String!): [SecIpAllowlistRule!]!
  }
`;

export const SecIpAllowlistRuleResolvers = {
  Query: {
    getSecIpAllowlistRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecIpAllowlistRule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecIpAllowlistRules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecIpAllowlistRule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
