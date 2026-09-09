export const IntSalesforceRuleGqlTypeDefs = `
  type IntSalesforceRule {
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
    getIntSalesforceRule(id: ID!): IntSalesforceRule
    listIntSalesforceRules(tenantId: String!, limit: Int): [IntSalesforceRule!]!
  }

  extend type Mutation {
    createIntSalesforceRule(tenantId: String!, code: String!, name: String!): IntSalesforceRule!
    deleteIntSalesforceRule(id: ID!): Boolean!
  }
`;

export const IntSalesforceRuleGqlResolvers = {
  Query: {
    getIntSalesforceRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
