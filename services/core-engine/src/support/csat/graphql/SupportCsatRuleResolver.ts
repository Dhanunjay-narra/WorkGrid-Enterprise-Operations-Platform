export const SupportCsatRuleGqlTypeDefs = `
  type SupportCsatRule {
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
    getSupportCsatRule(id: ID!): SupportCsatRule
    listSupportCsatRules(tenantId: String!, limit: Int): [SupportCsatRule!]!
  }

  extend type Mutation {
    createSupportCsatRule(tenantId: String!, code: String!, name: String!): SupportCsatRule!
    deleteSupportCsatRule(id: ID!): Boolean!
  }
`;

export const SupportCsatRuleGqlResolvers = {
  Query: {
    getSupportCsatRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
