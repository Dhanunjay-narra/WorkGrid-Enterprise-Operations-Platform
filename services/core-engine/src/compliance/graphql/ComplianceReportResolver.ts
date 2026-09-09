export const ComplianceReportGqlTypeDefs = `
  type ComplianceReport {
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
    getComplianceReport(id: ID!): ComplianceReport
    listComplianceReports(tenantId: String!, limit: Int): [ComplianceReport!]!
  }

  extend type Mutation {
    createComplianceReport(tenantId: String!, code: String!, name: String!): ComplianceReport!
    deleteComplianceReport(id: ID!): Boolean!
  }
`;

export const ComplianceReportGqlResolvers = {
  Query: {
    getComplianceReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
