export const FinanceTreasuryRuleGqlTypeDefs = `
  type FinanceTreasuryRule {
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
    getFinanceTreasuryRule(id: ID!): FinanceTreasuryRule
    listFinanceTreasuryRules(tenantId: String!, limit: Int): [FinanceTreasuryRule!]!
  }

  extend type Mutation {
    createFinanceTreasuryRule(tenantId: String!, code: String!, name: String!): FinanceTreasuryRule!
    deleteFinanceTreasuryRule(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryRuleGqlResolvers = {
  Query: {
    getFinanceTreasuryRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
