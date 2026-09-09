export const CommCallsRuleGqlTypeDefs = `
  type CommCallsRule {
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
    getCommCallsRule(id: ID!): CommCallsRule
    listCommCallsRules(tenantId: String!, limit: Int): [CommCallsRule!]!
  }

  extend type Mutation {
    createCommCallsRule(tenantId: String!, code: String!, name: String!): CommCallsRule!
    deleteCommCallsRule(id: ID!): Boolean!
  }
`;

export const CommCallsRuleGqlResolvers = {
  Query: {
    getCommCallsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
