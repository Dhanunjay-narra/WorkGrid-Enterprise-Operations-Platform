export const SupportQueuesRuleGqlTypeDefs = `
  type SupportQueuesRule {
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
    getSupportQueuesRule(id: ID!): SupportQueuesRule
    listSupportQueuesRules(tenantId: String!, limit: Int): [SupportQueuesRule!]!
  }

  extend type Mutation {
    createSupportQueuesRule(tenantId: String!, code: String!, name: String!): SupportQueuesRule!
    deleteSupportQueuesRule(id: ID!): Boolean!
  }
`;

export const SupportQueuesRuleGqlResolvers = {
  Query: {
    getSupportQueuesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
