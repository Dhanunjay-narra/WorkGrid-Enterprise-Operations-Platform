export const ObsDashboardsReportGqlTypeDefs = `
  type ObsDashboardsReport {
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
    getObsDashboardsReport(id: ID!): ObsDashboardsReport
    listObsDashboardsReports(tenantId: String!, limit: Int): [ObsDashboardsReport!]!
  }

  extend type Mutation {
    createObsDashboardsReport(tenantId: String!, code: String!, name: String!): ObsDashboardsReport!
    deleteObsDashboardsReport(id: ID!): Boolean!
  }
`;

export const ObsDashboardsReportGqlResolvers = {
  Query: {
    getObsDashboardsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
