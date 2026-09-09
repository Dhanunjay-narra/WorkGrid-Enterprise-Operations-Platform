export const IntTransformationRuleTypeDefs = `
  type IntTransformationRule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntTransformationRule(id: ID!): IntTransformationRule
    listIntTransformationRules(tenantId: String!): [IntTransformationRule!]!
  }
`;

export const IntTransformationRuleResolvers = {
  Query: {
    getIntTransformationRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntTransformationRule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntTransformationRules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntTransformationRule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
