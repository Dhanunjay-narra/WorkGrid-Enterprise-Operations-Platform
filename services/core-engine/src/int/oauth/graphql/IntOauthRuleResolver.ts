export const IntOauthRuleGqlTypeDefs = `
  type IntOauthRule {
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
    getIntOauthRule(id: ID!): IntOauthRule
    listIntOauthRules(tenantId: String!, limit: Int): [IntOauthRule!]!
  }

  extend type Mutation {
    createIntOauthRule(tenantId: String!, code: String!, name: String!): IntOauthRule!
    deleteIntOauthRule(id: ID!): Boolean!
  }
`;

export const IntOauthRuleGqlResolvers = {
  Query: {
    getIntOauthRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
