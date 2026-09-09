export const HrLeaveReportGqlTypeDefs = `
  type HrLeaveReport {
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
    getHrLeaveReport(id: ID!): HrLeaveReport
    listHrLeaveReports(tenantId: String!, limit: Int): [HrLeaveReport!]!
  }

  extend type Mutation {
    createHrLeaveReport(tenantId: String!, code: String!, name: String!): HrLeaveReport!
    deleteHrLeaveReport(id: ID!): Boolean!
  }
`;

export const HrLeaveReportGqlResolvers = {
  Query: {
    getHrLeaveReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
