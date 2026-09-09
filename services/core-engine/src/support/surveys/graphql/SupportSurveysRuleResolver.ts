export const SupportSurveysRuleGqlTypeDefs = `
  type SupportSurveysRule {
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
    getSupportSurveysRule(id: ID!): SupportSurveysRule
    listSupportSurveysRules(tenantId: String!, limit: Int): [SupportSurveysRule!]!
  }

  extend type Mutation {
    createSupportSurveysRule(tenantId: String!, code: String!, name: String!): SupportSurveysRule!
    deleteSupportSurveysRule(id: ID!): Boolean!
  }
`;

export const SupportSurveysRuleGqlResolvers = {
  Query: {
    getSupportSurveysRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
