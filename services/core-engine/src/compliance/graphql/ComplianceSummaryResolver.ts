export const ComplianceSummaryGqlTypeDefs = `
  type ComplianceSummary {
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
    getComplianceSummary(id: ID!): ComplianceSummary
    listComplianceSummarys(tenantId: String!, limit: Int): [ComplianceSummary!]!
  }

  extend type Mutation {
    createComplianceSummary(tenantId: String!, code: String!, name: String!): ComplianceSummary!
    deleteComplianceSummary(id: ID!): Boolean!
  }
`;

export const ComplianceSummaryGqlResolvers = {
  Query: {
    getComplianceSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
