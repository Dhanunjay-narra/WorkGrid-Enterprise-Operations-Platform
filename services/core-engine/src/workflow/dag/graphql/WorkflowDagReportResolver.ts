export const WorkflowDagReportGqlTypeDefs = `
  type WorkflowDagReport {
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
    getWorkflowDagReport(id: ID!): WorkflowDagReport
    listWorkflowDagReports(tenantId: String!, limit: Int): [WorkflowDagReport!]!
  }

  extend type Mutation {
    createWorkflowDagReport(tenantId: String!, code: String!, name: String!): WorkflowDagReport!
    deleteWorkflowDagReport(id: ID!): Boolean!
  }
`;

export const WorkflowDagReportGqlResolvers = {
  Query: {
    getWorkflowDagReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
