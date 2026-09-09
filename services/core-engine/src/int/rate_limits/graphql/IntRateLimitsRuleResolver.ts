export const IntRateLimitsRuleGqlTypeDefs = `
  type IntRateLimitsRule {
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
    getIntRateLimitsRule(id: ID!): IntRateLimitsRule
    listIntRateLimitsRules(tenantId: String!, limit: Int): [IntRateLimitsRule!]!
  }

  extend type Mutation {
    createIntRateLimitsRule(tenantId: String!, code: String!, name: String!): IntRateLimitsRule!
    deleteIntRateLimitsRule(id: ID!): Boolean!
  }
`;

export const IntRateLimitsRuleGqlResolvers = {
  Query: {
    getIntRateLimitsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
