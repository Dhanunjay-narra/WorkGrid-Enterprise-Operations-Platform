export const WorkflowNodesQueueGqlTypeDefs = `
  type WorkflowNodesQueue {
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
    getWorkflowNodesQueue(id: ID!): WorkflowNodesQueue
    listWorkflowNodesQueues(tenantId: String!, limit: Int): [WorkflowNodesQueue!]!
  }

  extend type Mutation {
    createWorkflowNodesQueue(tenantId: String!, code: String!, name: String!): WorkflowNodesQueue!
    deleteWorkflowNodesQueue(id: ID!): Boolean!
  }
`;

export const WorkflowNodesQueueGqlResolvers = {
  Query: {
    getWorkflowNodesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
