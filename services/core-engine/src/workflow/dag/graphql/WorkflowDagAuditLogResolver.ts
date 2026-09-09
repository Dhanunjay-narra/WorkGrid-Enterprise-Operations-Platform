export const WorkflowDagAuditLogGqlTypeDefs = `
  type WorkflowDagAuditLog {
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
    getWorkflowDagAuditLog(id: ID!): WorkflowDagAuditLog
    listWorkflowDagAuditLogs(tenantId: String!, limit: Int): [WorkflowDagAuditLog!]!
  }

  extend type Mutation {
    createWorkflowDagAuditLog(tenantId: String!, code: String!, name: String!): WorkflowDagAuditLog!
    deleteWorkflowDagAuditLog(id: ID!): Boolean!
  }
`;

export const WorkflowDagAuditLogGqlResolvers = {
  Query: {
    getWorkflowDagAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
