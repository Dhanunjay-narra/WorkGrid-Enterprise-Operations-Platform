export const WorkflowDagTaskGqlTypeDefs = `
  type WorkflowDagTask {
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
    getWorkflowDagTask(id: ID!): WorkflowDagTask
    listWorkflowDagTasks(tenantId: String!, limit: Int): [WorkflowDagTask!]!
  }

  extend type Mutation {
    createWorkflowDagTask(tenantId: String!, code: String!, name: String!): WorkflowDagTask!
    deleteWorkflowDagTask(id: ID!): Boolean!
  }
`;

export const WorkflowDagTaskGqlResolvers = {
  Query: {
    getWorkflowDagTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
