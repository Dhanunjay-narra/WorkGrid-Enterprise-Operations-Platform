export const ProjectGanttReportGqlTypeDefs = `
  type ProjectGanttReport {
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
    getProjectGanttReport(id: ID!): ProjectGanttReport
    listProjectGanttReports(tenantId: String!, limit: Int): [ProjectGanttReport!]!
  }

  extend type Mutation {
    createProjectGanttReport(tenantId: String!, code: String!, name: String!): ProjectGanttReport!
    deleteProjectGanttReport(id: ID!): Boolean!
  }
`;

export const ProjectGanttReportGqlResolvers = {
  Query: {
    getProjectGanttReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
