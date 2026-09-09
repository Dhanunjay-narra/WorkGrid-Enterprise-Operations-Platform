export const FinanceInvoicesRuleGqlTypeDefs = `
  type FinanceInvoicesRule {
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
    getFinanceInvoicesRule(id: ID!): FinanceInvoicesRule
    listFinanceInvoicesRules(tenantId: String!, limit: Int): [FinanceInvoicesRule!]!
  }

  extend type Mutation {
    createFinanceInvoicesRule(tenantId: String!, code: String!, name: String!): FinanceInvoicesRule!
    deleteFinanceInvoicesRule(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesRuleGqlResolvers = {
  Query: {
    getFinanceInvoicesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
