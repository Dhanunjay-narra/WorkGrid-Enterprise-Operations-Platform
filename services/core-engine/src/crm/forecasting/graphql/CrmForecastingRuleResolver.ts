export const CrmForecastingRuleGqlTypeDefs = `
  type CrmForecastingRule {
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
    getCrmForecastingRule(id: ID!): CrmForecastingRule
    listCrmForecastingRules(tenantId: String!, limit: Int): [CrmForecastingRule!]!
  }

  extend type Mutation {
    createCrmForecastingRule(tenantId: String!, code: String!, name: String!): CrmForecastingRule!
    deleteCrmForecastingRule(id: ID!): Boolean!
  }
`;

export const CrmForecastingRuleGqlResolvers = {
  Query: {
    getCrmForecastingRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
