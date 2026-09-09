export const WorkflowCronsReportGqlTypeDefs = `
  type WorkflowCronsReport {
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
    getWorkflowCronsReport(id: ID!): WorkflowCronsReport
    listWorkflowCronsReports(tenantId: String!, limit: Int): [WorkflowCronsReport!]!
  }

  extend type Mutation {
    createWorkflowCronsReport(tenantId: String!, code: String!, name: String!): WorkflowCronsReport!
    deleteWorkflowCronsReport(id: ID!): Boolean!
  }
`;

export const WorkflowCronsReportGqlResolvers = {
  Query: {
    getWorkflowCronsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
