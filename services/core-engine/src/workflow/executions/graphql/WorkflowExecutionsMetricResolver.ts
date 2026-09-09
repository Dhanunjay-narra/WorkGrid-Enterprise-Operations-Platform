export const WorkflowExecutionsMetricGqlTypeDefs = `
  type WorkflowExecutionsMetric {
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
    getWorkflowExecutionsMetric(id: ID!): WorkflowExecutionsMetric
    listWorkflowExecutionsMetrics(tenantId: String!, limit: Int): [WorkflowExecutionsMetric!]!
  }

  extend type Mutation {
    createWorkflowExecutionsMetric(tenantId: String!, code: String!, name: String!): WorkflowExecutionsMetric!
    deleteWorkflowExecutionsMetric(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsMetricGqlResolvers = {
  Query: {
    getWorkflowExecutionsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
