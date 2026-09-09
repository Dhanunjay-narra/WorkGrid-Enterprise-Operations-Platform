export const WorkflowExecutionsTaskGqlTypeDefs = `
  type WorkflowExecutionsTask {
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
    getWorkflowExecutionsTask(id: ID!): WorkflowExecutionsTask
    listWorkflowExecutionsTasks(tenantId: String!, limit: Int): [WorkflowExecutionsTask!]!
  }

  extend type Mutation {
    createWorkflowExecutionsTask(tenantId: String!, code: String!, name: String!): WorkflowExecutionsTask!
    deleteWorkflowExecutionsTask(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsTaskGqlResolvers = {
  Query: {
    getWorkflowExecutionsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
