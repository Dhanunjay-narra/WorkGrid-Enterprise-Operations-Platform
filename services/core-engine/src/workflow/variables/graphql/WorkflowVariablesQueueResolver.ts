export const WorkflowVariablesQueueGqlTypeDefs = `
  type WorkflowVariablesQueue {
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
    getWorkflowVariablesQueue(id: ID!): WorkflowVariablesQueue
    listWorkflowVariablesQueues(tenantId: String!, limit: Int): [WorkflowVariablesQueue!]!
  }

  extend type Mutation {
    createWorkflowVariablesQueue(tenantId: String!, code: String!, name: String!): WorkflowVariablesQueue!
    deleteWorkflowVariablesQueue(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesQueueGqlResolvers = {
  Query: {
    getWorkflowVariablesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
