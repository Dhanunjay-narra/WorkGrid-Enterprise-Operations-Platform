export const WorkflowEdgesQueueGqlTypeDefs = `
  type WorkflowEdgesQueue {
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
    getWorkflowEdgesQueue(id: ID!): WorkflowEdgesQueue
    listWorkflowEdgesQueues(tenantId: String!, limit: Int): [WorkflowEdgesQueue!]!
  }

  extend type Mutation {
    createWorkflowEdgesQueue(tenantId: String!, code: String!, name: String!): WorkflowEdgesQueue!
    deleteWorkflowEdgesQueue(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesQueueGqlResolvers = {
  Query: {
    getWorkflowEdgesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
