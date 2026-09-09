export const ProjectGanttAuditLogGqlTypeDefs = `
  type ProjectGanttAuditLog {
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
    getProjectGanttAuditLog(id: ID!): ProjectGanttAuditLog
    listProjectGanttAuditLogs(tenantId: String!, limit: Int): [ProjectGanttAuditLog!]!
  }

  extend type Mutation {
    createProjectGanttAuditLog(tenantId: String!, code: String!, name: String!): ProjectGanttAuditLog!
    deleteProjectGanttAuditLog(id: ID!): Boolean!
  }
`;

export const ProjectGanttAuditLogGqlResolvers = {
  Query: {
    getProjectGanttAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
