export const WorkflowCronsMetricGqlTypeDefs = `
  type WorkflowCronsMetric {
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
    getWorkflowCronsMetric(id: ID!): WorkflowCronsMetric
    listWorkflowCronsMetrics(tenantId: String!, limit: Int): [WorkflowCronsMetric!]!
  }

  extend type Mutation {
    createWorkflowCronsMetric(tenantId: String!, code: String!, name: String!): WorkflowCronsMetric!
    deleteWorkflowCronsMetric(id: ID!): Boolean!
  }
`;

export const WorkflowCronsMetricGqlResolvers = {
  Query: {
    getWorkflowCronsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
