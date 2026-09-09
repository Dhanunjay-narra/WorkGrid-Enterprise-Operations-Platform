export const HrRecruitmentReportGqlTypeDefs = `
  type HrRecruitmentReport {
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
    getHrRecruitmentReport(id: ID!): HrRecruitmentReport
    listHrRecruitmentReports(tenantId: String!, limit: Int): [HrRecruitmentReport!]!
  }

  extend type Mutation {
    createHrRecruitmentReport(tenantId: String!, code: String!, name: String!): HrRecruitmentReport!
    deleteHrRecruitmentReport(id: ID!): Boolean!
  }
`;

export const HrRecruitmentReportGqlResolvers = {
  Query: {
    getHrRecruitmentReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrRecruitmentReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
