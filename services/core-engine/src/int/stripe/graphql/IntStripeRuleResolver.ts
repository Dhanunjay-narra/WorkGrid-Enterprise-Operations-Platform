export const IntStripeRuleGqlTypeDefs = `
  type IntStripeRule {
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
    getIntStripeRule(id: ID!): IntStripeRule
    listIntStripeRules(tenantId: String!, limit: Int): [IntStripeRule!]!
  }

  extend type Mutation {
    createIntStripeRule(tenantId: String!, code: String!, name: String!): IntStripeRule!
    deleteIntStripeRule(id: ID!): Boolean!
  }
`;

export const IntStripeRuleGqlResolvers = {
  Query: {
    getIntStripeRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
