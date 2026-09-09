export const CommMessagesRuleGqlTypeDefs = `
  type CommMessagesRule {
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
    getCommMessagesRule(id: ID!): CommMessagesRule
    listCommMessagesRules(tenantId: String!, limit: Int): [CommMessagesRule!]!
  }

  extend type Mutation {
    createCommMessagesRule(tenantId: String!, code: String!, name: String!): CommMessagesRule!
    deleteCommMessagesRule(id: ID!): Boolean!
  }
`;

export const CommMessagesRuleGqlResolvers = {
  Query: {
    getCommMessagesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
