export const BiDashboardsRuleGqlTypeDefs = `
  type BiDashboardsRule {
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
    getBiDashboardsRule(id: ID!): BiDashboardsRule
    listBiDashboardsRules(tenantId: String!, limit: Int): [BiDashboardsRule!]!
  }

  extend type Mutation {
    createBiDashboardsRule(tenantId: String!, code: String!, name: String!): BiDashboardsRule!
    deleteBiDashboardsRule(id: ID!): Boolean!
  }
`;

export const BiDashboardsRuleGqlResolvers = {
  Query: {
    getBiDashboardsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
