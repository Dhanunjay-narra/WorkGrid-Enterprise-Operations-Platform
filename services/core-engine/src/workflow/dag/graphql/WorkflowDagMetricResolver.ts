export const WorkflowDagMetricGqlTypeDefs = `
  type WorkflowDagMetric {
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
    getWorkflowDagMetric(id: ID!): WorkflowDagMetric
    listWorkflowDagMetrics(tenantId: String!, limit: Int): [WorkflowDagMetric!]!
  }

  extend type Mutation {
    createWorkflowDagMetric(tenantId: String!, code: String!, name: String!): WorkflowDagMetric!
    deleteWorkflowDagMetric(id: ID!): Boolean!
  }
`;

export const WorkflowDagMetricGqlResolvers = {
  Query: {
    getWorkflowDagMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
