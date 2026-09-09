export const WorkflowExecutionsBatchGqlTypeDefs = `
  type WorkflowExecutionsBatch {
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
    getWorkflowExecutionsBatch(id: ID!): WorkflowExecutionsBatch
    listWorkflowExecutionsBatchs(tenantId: String!, limit: Int): [WorkflowExecutionsBatch!]!
  }

  extend type Mutation {
    createWorkflowExecutionsBatch(tenantId: String!, code: String!, name: String!): WorkflowExecutionsBatch!
    deleteWorkflowExecutionsBatch(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsBatchGqlResolvers = {
  Query: {
    getWorkflowExecutionsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
