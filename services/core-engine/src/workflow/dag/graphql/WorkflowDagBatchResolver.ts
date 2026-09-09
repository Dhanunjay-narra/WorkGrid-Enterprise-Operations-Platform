export const WorkflowDagBatchGqlTypeDefs = `
  type WorkflowDagBatch {
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
    getWorkflowDagBatch(id: ID!): WorkflowDagBatch
    listWorkflowDagBatchs(tenantId: String!, limit: Int): [WorkflowDagBatch!]!
  }

  extend type Mutation {
    createWorkflowDagBatch(tenantId: String!, code: String!, name: String!): WorkflowDagBatch!
    deleteWorkflowDagBatch(id: ID!): Boolean!
  }
`;

export const WorkflowDagBatchGqlResolvers = {
  Query: {
    getWorkflowDagBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
