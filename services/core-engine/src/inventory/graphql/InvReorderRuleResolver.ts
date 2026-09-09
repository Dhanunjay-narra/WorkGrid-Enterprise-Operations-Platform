export const InvReorderRuleTypeDefs = `
  type InvReorderRule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvReorderRule(id: ID!): InvReorderRule
    listInvReorderRules(tenantId: String!): [InvReorderRule!]!
  }
`;

export const InvReorderRuleResolvers = {
  Query: {
    getInvReorderRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvReorderRule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvReorderRules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvReorderRule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
