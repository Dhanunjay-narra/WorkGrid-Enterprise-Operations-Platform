export const WorkflowVariablesReportGqlTypeDefs = `
  type WorkflowVariablesReport {
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
    getWorkflowVariablesReport(id: ID!): WorkflowVariablesReport
    listWorkflowVariablesReports(tenantId: String!, limit: Int): [WorkflowVariablesReport!]!
  }

  extend type Mutation {
    createWorkflowVariablesReport(tenantId: String!, code: String!, name: String!): WorkflowVariablesReport!
    deleteWorkflowVariablesReport(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesReportGqlResolvers = {
  Query: {
    getWorkflowVariablesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
