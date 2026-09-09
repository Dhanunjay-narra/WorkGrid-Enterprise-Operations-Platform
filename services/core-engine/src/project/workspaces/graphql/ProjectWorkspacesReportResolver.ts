export const ProjectWorkspacesReportGqlTypeDefs = `
  type ProjectWorkspacesReport {
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
    getProjectWorkspacesReport(id: ID!): ProjectWorkspacesReport
    listProjectWorkspacesReports(tenantId: String!, limit: Int): [ProjectWorkspacesReport!]!
  }

  extend type Mutation {
    createProjectWorkspacesReport(tenantId: String!, code: String!, name: String!): ProjectWorkspacesReport!
    deleteProjectWorkspacesReport(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesReportGqlResolvers = {
  Query: {
    getProjectWorkspacesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
