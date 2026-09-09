export const WorkflowVariablesAuditLogGqlTypeDefs = `
  type WorkflowVariablesAuditLog {
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
    getWorkflowVariablesAuditLog(id: ID!): WorkflowVariablesAuditLog
    listWorkflowVariablesAuditLogs(tenantId: String!, limit: Int): [WorkflowVariablesAuditLog!]!
  }

  extend type Mutation {
    createWorkflowVariablesAuditLog(tenantId: String!, code: String!, name: String!): WorkflowVariablesAuditLog!
    deleteWorkflowVariablesAuditLog(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesAuditLogGqlResolvers = {
  Query: {
    getWorkflowVariablesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
