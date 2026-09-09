export const WorkflowApprovalsReportGqlTypeDefs = `
  type WorkflowApprovalsReport {
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
    getWorkflowApprovalsReport(id: ID!): WorkflowApprovalsReport
    listWorkflowApprovalsReports(tenantId: String!, limit: Int): [WorkflowApprovalsReport!]!
  }

  extend type Mutation {
    createWorkflowApprovalsReport(tenantId: String!, code: String!, name: String!): WorkflowApprovalsReport!
    deleteWorkflowApprovalsReport(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsReportGqlResolvers = {
  Query: {
    getWorkflowApprovalsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
