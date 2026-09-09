export const WorkflowEdgesReportGqlTypeDefs = `
  type WorkflowEdgesReport {
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
    getWorkflowEdgesReport(id: ID!): WorkflowEdgesReport
    listWorkflowEdgesReports(tenantId: String!, limit: Int): [WorkflowEdgesReport!]!
  }

  extend type Mutation {
    createWorkflowEdgesReport(tenantId: String!, code: String!, name: String!): WorkflowEdgesReport!
    deleteWorkflowEdgesReport(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesReportGqlResolvers = {
  Query: {
    getWorkflowEdgesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
