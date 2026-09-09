export const WorkflowRetriesAuditLogGqlTypeDefs = `
  type WorkflowRetriesAuditLog {
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
    getWorkflowRetriesAuditLog(id: ID!): WorkflowRetriesAuditLog
    listWorkflowRetriesAuditLogs(tenantId: String!, limit: Int): [WorkflowRetriesAuditLog!]!
  }

  extend type Mutation {
    createWorkflowRetriesAuditLog(tenantId: String!, code: String!, name: String!): WorkflowRetriesAuditLog!
    deleteWorkflowRetriesAuditLog(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesAuditLogGqlResolvers = {
  Query: {
    getWorkflowRetriesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
