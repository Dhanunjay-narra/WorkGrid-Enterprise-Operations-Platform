export const WorkflowEdgesMetricGqlTypeDefs = `
  type WorkflowEdgesMetric {
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
    getWorkflowEdgesMetric(id: ID!): WorkflowEdgesMetric
    listWorkflowEdgesMetrics(tenantId: String!, limit: Int): [WorkflowEdgesMetric!]!
  }

  extend type Mutation {
    createWorkflowEdgesMetric(tenantId: String!, code: String!, name: String!): WorkflowEdgesMetric!
    deleteWorkflowEdgesMetric(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesMetricGqlResolvers = {
  Query: {
    getWorkflowEdgesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
