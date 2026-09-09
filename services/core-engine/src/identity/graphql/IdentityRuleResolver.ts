export const IdentityRuleGqlTypeDefs = `
  type IdentityRule {
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
    getIdentityRule(id: ID!): IdentityRule
    listIdentityRules(tenantId: String!, limit: Int): [IdentityRule!]!
  }

  extend type Mutation {
    createIdentityRule(tenantId: String!, code: String!, name: String!): IdentityRule!
    deleteIdentityRule(id: ID!): Boolean!
  }
`;

export const IdentityRuleGqlResolvers = {
  Query: {
    getIdentityRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
