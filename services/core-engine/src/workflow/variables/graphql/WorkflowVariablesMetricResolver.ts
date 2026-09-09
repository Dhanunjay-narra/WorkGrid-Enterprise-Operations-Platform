export const WorkflowVariablesMetricGqlTypeDefs = `
  type WorkflowVariablesMetric {
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
    getWorkflowVariablesMetric(id: ID!): WorkflowVariablesMetric
    listWorkflowVariablesMetrics(tenantId: String!, limit: Int): [WorkflowVariablesMetric!]!
  }

  extend type Mutation {
    createWorkflowVariablesMetric(tenantId: String!, code: String!, name: String!): WorkflowVariablesMetric!
    deleteWorkflowVariablesMetric(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesMetricGqlResolvers = {
  Query: {
    getWorkflowVariablesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
