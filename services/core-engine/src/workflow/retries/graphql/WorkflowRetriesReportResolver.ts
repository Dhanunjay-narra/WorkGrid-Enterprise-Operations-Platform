export const WorkflowRetriesReportGqlTypeDefs = `
  type WorkflowRetriesReport {
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
    getWorkflowRetriesReport(id: ID!): WorkflowRetriesReport
    listWorkflowRetriesReports(tenantId: String!, limit: Int): [WorkflowRetriesReport!]!
  }

  extend type Mutation {
    createWorkflowRetriesReport(tenantId: String!, code: String!, name: String!): WorkflowRetriesReport!
    deleteWorkflowRetriesReport(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesReportGqlResolvers = {
  Query: {
    getWorkflowRetriesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
