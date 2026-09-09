export const WorkflowDagQueueGqlTypeDefs = `
  type WorkflowDagQueue {
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
    getWorkflowDagQueue(id: ID!): WorkflowDagQueue
    listWorkflowDagQueues(tenantId: String!, limit: Int): [WorkflowDagQueue!]!
  }

  extend type Mutation {
    createWorkflowDagQueue(tenantId: String!, code: String!, name: String!): WorkflowDagQueue!
    deleteWorkflowDagQueue(id: ID!): Boolean!
  }
`;

export const WorkflowDagQueueGqlResolvers = {
  Query: {
    getWorkflowDagQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
