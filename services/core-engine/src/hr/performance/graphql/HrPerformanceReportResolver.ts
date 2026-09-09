export const HrPerformanceReportGqlTypeDefs = `
  type HrPerformanceReport {
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
    getHrPerformanceReport(id: ID!): HrPerformanceReport
    listHrPerformanceReports(tenantId: String!, limit: Int): [HrPerformanceReport!]!
  }

  extend type Mutation {
    createHrPerformanceReport(tenantId: String!, code: String!, name: String!): HrPerformanceReport!
    deleteHrPerformanceReport(id: ID!): Boolean!
  }
`;

export const HrPerformanceReportGqlResolvers = {
  Query: {
    getHrPerformanceReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
