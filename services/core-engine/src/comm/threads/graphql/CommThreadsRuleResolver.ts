export const CommThreadsRuleGqlTypeDefs = `
  type CommThreadsRule {
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
    getCommThreadsRule(id: ID!): CommThreadsRule
    listCommThreadsRules(tenantId: String!, limit: Int): [CommThreadsRule!]!
  }

  extend type Mutation {
    createCommThreadsRule(tenantId: String!, code: String!, name: String!): CommThreadsRule!
    deleteCommThreadsRule(id: ID!): Boolean!
  }
`;

export const CommThreadsRuleGqlResolvers = {
  Query: {
    getCommThreadsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
