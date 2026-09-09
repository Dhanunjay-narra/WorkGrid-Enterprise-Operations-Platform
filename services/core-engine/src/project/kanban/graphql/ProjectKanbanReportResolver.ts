export const ProjectKanbanReportGqlTypeDefs = `
  type ProjectKanbanReport {
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
    getProjectKanbanReport(id: ID!): ProjectKanbanReport
    listProjectKanbanReports(tenantId: String!, limit: Int): [ProjectKanbanReport!]!
  }

  extend type Mutation {
    createProjectKanbanReport(tenantId: String!, code: String!, name: String!): ProjectKanbanReport!
    deleteProjectKanbanReport(id: ID!): Boolean!
  }
`;

export const ProjectKanbanReportGqlResolvers = {
  Query: {
    getProjectKanbanReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
