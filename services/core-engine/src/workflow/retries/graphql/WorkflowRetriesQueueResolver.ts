export const WorkflowRetriesQueueGqlTypeDefs = `
  type WorkflowRetriesQueue {
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
    getWorkflowRetriesQueue(id: ID!): WorkflowRetriesQueue
    listWorkflowRetriesQueues(tenantId: String!, limit: Int): [WorkflowRetriesQueue!]!
  }

  extend type Mutation {
    createWorkflowRetriesQueue(tenantId: String!, code: String!, name: String!): WorkflowRetriesQueue!
    deleteWorkflowRetriesQueue(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesQueueGqlResolvers = {
  Query: {
    getWorkflowRetriesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
