export const IntWebhooksRuleGqlTypeDefs = `
  type IntWebhooksRule {
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
    getIntWebhooksRule(id: ID!): IntWebhooksRule
    listIntWebhooksRules(tenantId: String!, limit: Int): [IntWebhooksRule!]!
  }

  extend type Mutation {
    createIntWebhooksRule(tenantId: String!, code: String!, name: String!): IntWebhooksRule!
    deleteIntWebhooksRule(id: ID!): Boolean!
  }
`;

export const IntWebhooksRuleGqlResolvers = {
  Query: {
    getIntWebhooksRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
