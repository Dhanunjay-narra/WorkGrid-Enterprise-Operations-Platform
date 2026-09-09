export const FinanceForecastRuleGqlTypeDefs = `
  type FinanceForecastRule {
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
    getFinanceForecastRule(id: ID!): FinanceForecastRule
    listFinanceForecastRules(tenantId: String!, limit: Int): [FinanceForecastRule!]!
  }

  extend type Mutation {
    createFinanceForecastRule(tenantId: String!, code: String!, name: String!): FinanceForecastRule!
    deleteFinanceForecastRule(id: ID!): Boolean!
  }
`;

export const FinanceForecastRuleGqlResolvers = {
  Query: {
    getFinanceForecastRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
