export const WorkflowNodesBatchGqlTypeDefs = `
  type WorkflowNodesBatch {
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
    getWorkflowNodesBatch(id: ID!): WorkflowNodesBatch
    listWorkflowNodesBatchs(tenantId: String!, limit: Int): [WorkflowNodesBatch!]!
  }

  extend type Mutation {
    createWorkflowNodesBatch(tenantId: String!, code: String!, name: String!): WorkflowNodesBatch!
    deleteWorkflowNodesBatch(id: ID!): Boolean!
  }
`;

export const WorkflowNodesBatchGqlResolvers = {
  Query: {
    getWorkflowNodesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
