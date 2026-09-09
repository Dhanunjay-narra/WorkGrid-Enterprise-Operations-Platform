export const IntSlackRuleGqlTypeDefs = `
  type IntSlackRule {
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
    getIntSlackRule(id: ID!): IntSlackRule
    listIntSlackRules(tenantId: String!, limit: Int): [IntSlackRule!]!
  }

  extend type Mutation {
    createIntSlackRule(tenantId: String!, code: String!, name: String!): IntSlackRule!
    deleteIntSlackRule(id: ID!): Boolean!
  }
`;

export const IntSlackRuleGqlResolvers = {
  Query: {
    getIntSlackRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
