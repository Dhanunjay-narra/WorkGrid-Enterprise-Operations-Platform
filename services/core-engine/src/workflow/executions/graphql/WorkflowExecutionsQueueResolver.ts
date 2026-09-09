export const WorkflowExecutionsQueueGqlTypeDefs = `
  type WorkflowExecutionsQueue {
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
    getWorkflowExecutionsQueue(id: ID!): WorkflowExecutionsQueue
    listWorkflowExecutionsQueues(tenantId: String!, limit: Int): [WorkflowExecutionsQueue!]!
  }

  extend type Mutation {
    createWorkflowExecutionsQueue(tenantId: String!, code: String!, name: String!): WorkflowExecutionsQueue!
    deleteWorkflowExecutionsQueue(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsQueueGqlResolvers = {
  Query: {
    getWorkflowExecutionsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
