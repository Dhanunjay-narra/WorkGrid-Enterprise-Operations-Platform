export const HrPayrollReportGqlTypeDefs = `
  type HrPayrollReport {
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
    getHrPayrollReport(id: ID!): HrPayrollReport
    listHrPayrollReports(tenantId: String!, limit: Int): [HrPayrollReport!]!
  }

  extend type Mutation {
    createHrPayrollReport(tenantId: String!, code: String!, name: String!): HrPayrollReport!
    deleteHrPayrollReport(id: ID!): Boolean!
  }
`;

export const HrPayrollReportGqlResolvers = {
  Query: {
    getHrPayrollReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
