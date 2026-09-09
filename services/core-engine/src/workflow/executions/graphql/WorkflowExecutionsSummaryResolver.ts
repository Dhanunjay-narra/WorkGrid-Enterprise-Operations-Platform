export const WorkflowExecutionsSummaryGqlTypeDefs = `
  type WorkflowExecutionsSummary {
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
    getWorkflowExecutionsSummary(id: ID!): WorkflowExecutionsSummary
    listWorkflowExecutionsSummarys(tenantId: String!, limit: Int): [WorkflowExecutionsSummary!]!
  }

  extend type Mutation {
    createWorkflowExecutionsSummary(tenantId: String!, code: String!, name: String!): WorkflowExecutionsSummary!
    deleteWorkflowExecutionsSummary(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsSummaryGqlResolvers = {
  Query: {
    getWorkflowExecutionsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
