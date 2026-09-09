export const PrjIssueReportTypeDefs = `
  type PrjIssueReport {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getPrjIssueReport(id: ID!): PrjIssueReport
    listPrjIssueReports(tenantId: String!): [PrjIssueReport!]!
  }
`;

export const PrjIssueReportResolvers = {
  Query: {
    getPrjIssueReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "PrjIssueReport", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listPrjIssueReports: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "PrjIssueReport", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
