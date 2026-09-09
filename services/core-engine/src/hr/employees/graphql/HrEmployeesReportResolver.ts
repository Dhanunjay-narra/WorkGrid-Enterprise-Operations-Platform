export const HrEmployeesReportGqlTypeDefs = `
  type HrEmployeesReport {
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
    getHrEmployeesReport(id: ID!): HrEmployeesReport
    listHrEmployeesReports(tenantId: String!, limit: Int): [HrEmployeesReport!]!
  }

  extend type Mutation {
    createHrEmployeesReport(tenantId: String!, code: String!, name: String!): HrEmployeesReport!
    deleteHrEmployeesReport(id: ID!): Boolean!
  }
`;

export const HrEmployeesReportGqlResolvers = {
  Query: {
    getHrEmployeesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
