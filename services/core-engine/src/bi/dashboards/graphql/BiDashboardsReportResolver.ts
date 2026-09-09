export const BiDashboardsReportGqlTypeDefs = `
  type BiDashboardsReport {
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
    getBiDashboardsReport(id: ID!): BiDashboardsReport
    listBiDashboardsReports(tenantId: String!, limit: Int): [BiDashboardsReport!]!
  }

  extend type Mutation {
    createBiDashboardsReport(tenantId: String!, code: String!, name: String!): BiDashboardsReport!
    deleteBiDashboardsReport(id: ID!): Boolean!
  }
`;

export const BiDashboardsReportGqlResolvers = {
  Query: {
    getBiDashboardsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
