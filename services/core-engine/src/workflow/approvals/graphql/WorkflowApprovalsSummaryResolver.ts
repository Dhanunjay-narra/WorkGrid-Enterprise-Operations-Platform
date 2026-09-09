export const WorkflowApprovalsSummaryGqlTypeDefs = `
  type WorkflowApprovalsSummary {
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
    getWorkflowApprovalsSummary(id: ID!): WorkflowApprovalsSummary
    listWorkflowApprovalsSummarys(tenantId: String!, limit: Int): [WorkflowApprovalsSummary!]!
  }

  extend type Mutation {
    createWorkflowApprovalsSummary(tenantId: String!, code: String!, name: String!): WorkflowApprovalsSummary!
    deleteWorkflowApprovalsSummary(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsSummaryGqlResolvers = {
  Query: {
    getWorkflowApprovalsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
