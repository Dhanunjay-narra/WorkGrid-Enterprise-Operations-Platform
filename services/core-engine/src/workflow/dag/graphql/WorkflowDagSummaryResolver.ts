export const WorkflowDagSummaryGqlTypeDefs = `
  type WorkflowDagSummary {
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
    getWorkflowDagSummary(id: ID!): WorkflowDagSummary
    listWorkflowDagSummarys(tenantId: String!, limit: Int): [WorkflowDagSummary!]!
  }

  extend type Mutation {
    createWorkflowDagSummary(tenantId: String!, code: String!, name: String!): WorkflowDagSummary!
    deleteWorkflowDagSummary(id: ID!): Boolean!
  }
`;

export const WorkflowDagSummaryGqlResolvers = {
  Query: {
    getWorkflowDagSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
