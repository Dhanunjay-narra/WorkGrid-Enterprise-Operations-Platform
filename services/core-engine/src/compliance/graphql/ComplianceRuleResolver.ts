export const ComplianceRuleGqlTypeDefs = `
  type ComplianceRule {
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
    getComplianceRule(id: ID!): ComplianceRule
    listComplianceRules(tenantId: String!, limit: Int): [ComplianceRule!]!
  }

  extend type Mutation {
    createComplianceRule(tenantId: String!, code: String!, name: String!): ComplianceRule!
    deleteComplianceRule(id: ID!): Boolean!
  }
`;

export const ComplianceRuleGqlResolvers = {
  Query: {
    getComplianceRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
