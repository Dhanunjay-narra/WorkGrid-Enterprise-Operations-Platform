export const WorkflowNodesReportGqlTypeDefs = `
  type WorkflowNodesReport {
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
    getWorkflowNodesReport(id: ID!): WorkflowNodesReport
    listWorkflowNodesReports(tenantId: String!, limit: Int): [WorkflowNodesReport!]!
  }

  extend type Mutation {
    createWorkflowNodesReport(tenantId: String!, code: String!, name: String!): WorkflowNodesReport!
    deleteWorkflowNodesReport(id: ID!): Boolean!
  }
`;

export const WorkflowNodesReportGqlResolvers = {
  Query: {
    getWorkflowNodesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
