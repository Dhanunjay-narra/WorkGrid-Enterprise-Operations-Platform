export const HrAttendanceReportGqlTypeDefs = `
  type HrAttendanceReport {
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
    getHrAttendanceReport(id: ID!): HrAttendanceReport
    listHrAttendanceReports(tenantId: String!, limit: Int): [HrAttendanceReport!]!
  }

  extend type Mutation {
    createHrAttendanceReport(tenantId: String!, code: String!, name: String!): HrAttendanceReport!
    deleteHrAttendanceReport(id: ID!): Boolean!
  }
`;

export const HrAttendanceReportGqlResolvers = {
  Query: {
    getHrAttendanceReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
