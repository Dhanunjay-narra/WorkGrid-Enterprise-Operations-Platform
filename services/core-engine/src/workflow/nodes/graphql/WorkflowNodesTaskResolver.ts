export const WorkflowNodesTaskGqlTypeDefs = `
  type WorkflowNodesTask {
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
    getWorkflowNodesTask(id: ID!): WorkflowNodesTask
    listWorkflowNodesTasks(tenantId: String!, limit: Int): [WorkflowNodesTask!]!
  }

  extend type Mutation {
    createWorkflowNodesTask(tenantId: String!, code: String!, name: String!): WorkflowNodesTask!
    deleteWorkflowNodesTask(id: ID!): Boolean!
  }
`;

export const WorkflowNodesTaskGqlResolvers = {
  Query: {
    getWorkflowNodesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
