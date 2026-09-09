export const ProjectTasksAuditLogGqlTypeDefs = `
  type ProjectTasksAuditLog {
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
    getProjectTasksAuditLog(id: ID!): ProjectTasksAuditLog
    listProjectTasksAuditLogs(tenantId: String!, limit: Int): [ProjectTasksAuditLog!]!
  }

  extend type Mutation {
    createProjectTasksAuditLog(tenantId: String!, code: String!, name: String!): ProjectTasksAuditLog!
    deleteProjectTasksAuditLog(id: ID!): Boolean!
  }
`;

export const ProjectTasksAuditLogGqlResolvers = {
  Query: {
    getProjectTasksAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
