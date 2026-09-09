export const FinanceTaxesRuleGqlTypeDefs = `
  type FinanceTaxesRule {
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
    getFinanceTaxesRule(id: ID!): FinanceTaxesRule
    listFinanceTaxesRules(tenantId: String!, limit: Int): [FinanceTaxesRule!]!
  }

  extend type Mutation {
    createFinanceTaxesRule(tenantId: String!, code: String!, name: String!): FinanceTaxesRule!
    deleteFinanceTaxesRule(id: ID!): Boolean!
  }
`;

export const FinanceTaxesRuleGqlResolvers = {
  Query: {
    getFinanceTaxesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
