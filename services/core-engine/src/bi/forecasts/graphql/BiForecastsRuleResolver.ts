export const BiForecastsRuleGqlTypeDefs = `
  type BiForecastsRule {
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
    getBiForecastsRule(id: ID!): BiForecastsRule
    listBiForecastsRules(tenantId: String!, limit: Int): [BiForecastsRule!]!
  }

  extend type Mutation {
    createBiForecastsRule(tenantId: String!, code: String!, name: String!): BiForecastsRule!
    deleteBiForecastsRule(id: ID!): Boolean!
  }
`;

export const BiForecastsRuleGqlResolvers = {
  Query: {
    getBiForecastsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
