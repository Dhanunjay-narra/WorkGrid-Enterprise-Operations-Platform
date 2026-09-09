export const WorkflowNodesMetricGqlTypeDefs = `
  type WorkflowNodesMetric {
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
    getWorkflowNodesMetric(id: ID!): WorkflowNodesMetric
    listWorkflowNodesMetrics(tenantId: String!, limit: Int): [WorkflowNodesMetric!]!
  }

  extend type Mutation {
    createWorkflowNodesMetric(tenantId: String!, code: String!, name: String!): WorkflowNodesMetric!
    deleteWorkflowNodesMetric(id: ID!): Boolean!
  }
`;

export const WorkflowNodesMetricGqlResolvers = {
  Query: {
    getWorkflowNodesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
