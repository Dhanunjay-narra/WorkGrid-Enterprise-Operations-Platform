export const CommNotificationsRuleGqlTypeDefs = `
  type CommNotificationsRule {
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
    getCommNotificationsRule(id: ID!): CommNotificationsRule
    listCommNotificationsRules(tenantId: String!, limit: Int): [CommNotificationsRule!]!
  }

  extend type Mutation {
    createCommNotificationsRule(tenantId: String!, code: String!, name: String!): CommNotificationsRule!
    deleteCommNotificationsRule(id: ID!): Boolean!
  }
`;

export const CommNotificationsRuleGqlResolvers = {
  Query: {
    getCommNotificationsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
