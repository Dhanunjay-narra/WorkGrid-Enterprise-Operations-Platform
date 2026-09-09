export const CommWebhooksRuleGqlTypeDefs = `
  type CommWebhooksRule {
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
    getCommWebhooksRule(id: ID!): CommWebhooksRule
    listCommWebhooksRules(tenantId: String!, limit: Int): [CommWebhooksRule!]!
  }

  extend type Mutation {
    createCommWebhooksRule(tenantId: String!, code: String!, name: String!): CommWebhooksRule!
    deleteCommWebhooksRule(id: ID!): Boolean!
  }
`;

export const CommWebhooksRuleGqlResolvers = {
  Query: {
    getCommWebhooksRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
