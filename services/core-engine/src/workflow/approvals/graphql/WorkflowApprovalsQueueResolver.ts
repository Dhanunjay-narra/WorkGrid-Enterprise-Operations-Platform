export const WorkflowApprovalsQueueGqlTypeDefs = `
  type WorkflowApprovalsQueue {
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
    getWorkflowApprovalsQueue(id: ID!): WorkflowApprovalsQueue
    listWorkflowApprovalsQueues(tenantId: String!, limit: Int): [WorkflowApprovalsQueue!]!
  }

  extend type Mutation {
    createWorkflowApprovalsQueue(tenantId: String!, code: String!, name: String!): WorkflowApprovalsQueue!
    deleteWorkflowApprovalsQueue(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsQueueGqlResolvers = {
  Query: {
    getWorkflowApprovalsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
