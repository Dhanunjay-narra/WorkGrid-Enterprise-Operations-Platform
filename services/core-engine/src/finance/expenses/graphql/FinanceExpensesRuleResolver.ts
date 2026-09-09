export const FinanceExpensesRuleGqlTypeDefs = `
  type FinanceExpensesRule {
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
    getFinanceExpensesRule(id: ID!): FinanceExpensesRule
    listFinanceExpensesRules(tenantId: String!, limit: Int): [FinanceExpensesRule!]!
  }

  extend type Mutation {
    createFinanceExpensesRule(tenantId: String!, code: String!, name: String!): FinanceExpensesRule!
    deleteFinanceExpensesRule(id: ID!): Boolean!
  }
`;

export const FinanceExpensesRuleGqlResolvers = {
  Query: {
    getFinanceExpensesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
