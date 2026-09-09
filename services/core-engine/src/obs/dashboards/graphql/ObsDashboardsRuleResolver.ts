export const ObsDashboardsRuleGqlTypeDefs = `
  type ObsDashboardsRule {
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
    getObsDashboardsRule(id: ID!): ObsDashboardsRule
    listObsDashboardsRules(tenantId: String!, limit: Int): [ObsDashboardsRule!]!
  }

  extend type Mutation {
    createObsDashboardsRule(tenantId: String!, code: String!, name: String!): ObsDashboardsRule!
    deleteObsDashboardsRule(id: ID!): Boolean!
  }
`;

export const ObsDashboardsRuleGqlResolvers = {
  Query: {
    getObsDashboardsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
