export const AuthRuleGqlTypeDefs = `
  type AuthRule {
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
    getAuthRule(id: ID!): AuthRule
    listAuthRules(tenantId: String!, limit: Int): [AuthRule!]!
  }

  extend type Mutation {
    createAuthRule(tenantId: String!, code: String!, name: String!): AuthRule!
    deleteAuthRule(id: ID!): Boolean!
  }
`;

export const AuthRuleGqlResolvers = {
  Query: {
    getAuthRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
