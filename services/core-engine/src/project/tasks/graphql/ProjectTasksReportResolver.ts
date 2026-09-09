export const ProjectTasksReportGqlTypeDefs = `
  type ProjectTasksReport {
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
    getProjectTasksReport(id: ID!): ProjectTasksReport
    listProjectTasksReports(tenantId: String!, limit: Int): [ProjectTasksReport!]!
  }

  extend type Mutation {
    createProjectTasksReport(tenantId: String!, code: String!, name: String!): ProjectTasksReport!
    deleteProjectTasksReport(id: ID!): Boolean!
  }
`;

export const ProjectTasksReportGqlResolvers = {
  Query: {
    getProjectTasksReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
