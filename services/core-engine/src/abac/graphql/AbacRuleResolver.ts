export const AbacRuleGqlTypeDefs = `
  type AbacRule {
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
    getAbacRule(id: ID!): AbacRule
    listAbacRules(tenantId: String!, limit: Int): [AbacRule!]!
  }

  extend type Mutation {
    createAbacRule(tenantId: String!, code: String!, name: String!): AbacRule!
    deleteAbacRule(id: ID!): Boolean!
  }
`;

export const AbacRuleGqlResolvers = {
  Query: {
    getAbacRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
