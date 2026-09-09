export const SupportSlaRuleGqlTypeDefs = `
  type SupportSlaRule {
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
    getSupportSlaRule(id: ID!): SupportSlaRule
    listSupportSlaRules(tenantId: String!, limit: Int): [SupportSlaRule!]!
  }

  extend type Mutation {
    createSupportSlaRule(tenantId: String!, code: String!, name: String!): SupportSlaRule!
    deleteSupportSlaRule(id: ID!): Boolean!
  }
`;

export const SupportSlaRuleGqlResolvers = {
  Query: {
    getSupportSlaRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
