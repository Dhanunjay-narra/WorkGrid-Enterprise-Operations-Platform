export const FinanceLedgerRuleGqlTypeDefs = `
  type FinanceLedgerRule {
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
    getFinanceLedgerRule(id: ID!): FinanceLedgerRule
    listFinanceLedgerRules(tenantId: String!, limit: Int): [FinanceLedgerRule!]!
  }

  extend type Mutation {
    createFinanceLedgerRule(tenantId: String!, code: String!, name: String!): FinanceLedgerRule!
    deleteFinanceLedgerRule(id: ID!): Boolean!
  }
`;

export const FinanceLedgerRuleGqlResolvers = {
  Query: {
    getFinanceLedgerRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
