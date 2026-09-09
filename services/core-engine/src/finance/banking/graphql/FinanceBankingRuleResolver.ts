export const FinanceBankingRuleGqlTypeDefs = `
  type FinanceBankingRule {
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
    getFinanceBankingRule(id: ID!): FinanceBankingRule
    listFinanceBankingRules(tenantId: String!, limit: Int): [FinanceBankingRule!]!
  }

  extend type Mutation {
    createFinanceBankingRule(tenantId: String!, code: String!, name: String!): FinanceBankingRule!
    deleteFinanceBankingRule(id: ID!): Boolean!
  }
`;

export const FinanceBankingRuleGqlResolvers = {
  Query: {
    getFinanceBankingRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
