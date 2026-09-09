export const ProjectKanbanAuditLogGqlTypeDefs = `
  type ProjectKanbanAuditLog {
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
    getProjectKanbanAuditLog(id: ID!): ProjectKanbanAuditLog
    listProjectKanbanAuditLogs(tenantId: String!, limit: Int): [ProjectKanbanAuditLog!]!
  }

  extend type Mutation {
    createProjectKanbanAuditLog(tenantId: String!, code: String!, name: String!): ProjectKanbanAuditLog!
    deleteProjectKanbanAuditLog(id: ID!): Boolean!
  }
`;

export const ProjectKanbanAuditLogGqlResolvers = {
  Query: {
    getProjectKanbanAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
