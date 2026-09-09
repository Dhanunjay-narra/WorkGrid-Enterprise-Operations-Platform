export const SecComplianceReportTypeDefs = `
  type SecComplianceReport {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecComplianceReport(id: ID!): SecComplianceReport
    listSecComplianceReports(tenantId: String!): [SecComplianceReport!]!
  }
`;

export const SecComplianceReportResolvers = {
  Query: {
    getSecComplianceReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecComplianceReport", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecComplianceReports: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecComplianceReport", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
