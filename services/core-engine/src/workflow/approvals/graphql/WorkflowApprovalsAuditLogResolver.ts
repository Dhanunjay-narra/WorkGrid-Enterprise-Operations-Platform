export const WorkflowApprovalsAuditLogGqlTypeDefs = `
  type WorkflowApprovalsAuditLog {
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
    getWorkflowApprovalsAuditLog(id: ID!): WorkflowApprovalsAuditLog
    listWorkflowApprovalsAuditLogs(tenantId: String!, limit: Int): [WorkflowApprovalsAuditLog!]!
  }

  extend type Mutation {
    createWorkflowApprovalsAuditLog(tenantId: String!, code: String!, name: String!): WorkflowApprovalsAuditLog!
    deleteWorkflowApprovalsAuditLog(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsAuditLogGqlResolvers = {
  Query: {
    getWorkflowApprovalsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
