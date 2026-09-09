export const WorkflowApprovalsMetricGqlTypeDefs = `
  type WorkflowApprovalsMetric {
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
    getWorkflowApprovalsMetric(id: ID!): WorkflowApprovalsMetric
    listWorkflowApprovalsMetrics(tenantId: String!, limit: Int): [WorkflowApprovalsMetric!]!
  }

  extend type Mutation {
    createWorkflowApprovalsMetric(tenantId: String!, code: String!, name: String!): WorkflowApprovalsMetric!
    deleteWorkflowApprovalsMetric(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsMetricGqlResolvers = {
  Query: {
    getWorkflowApprovalsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
