export const WorkflowRetriesMetricGqlTypeDefs = `
  type WorkflowRetriesMetric {
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
    getWorkflowRetriesMetric(id: ID!): WorkflowRetriesMetric
    listWorkflowRetriesMetrics(tenantId: String!, limit: Int): [WorkflowRetriesMetric!]!
  }

  extend type Mutation {
    createWorkflowRetriesMetric(tenantId: String!, code: String!, name: String!): WorkflowRetriesMetric!
    deleteWorkflowRetriesMetric(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesMetricGqlResolvers = {
  Query: {
    getWorkflowRetriesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
