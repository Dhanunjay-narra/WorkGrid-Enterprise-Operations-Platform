export const FinanceBillsRuleGqlTypeDefs = `
  type FinanceBillsRule {
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
    getFinanceBillsRule(id: ID!): FinanceBillsRule
    listFinanceBillsRules(tenantId: String!, limit: Int): [FinanceBillsRule!]!
  }

  extend type Mutation {
    createFinanceBillsRule(tenantId: String!, code: String!, name: String!): FinanceBillsRule!
    deleteFinanceBillsRule(id: ID!): Boolean!
  }
`;

export const FinanceBillsRuleGqlResolvers = {
  Query: {
    getFinanceBillsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
