export const WorkflowCronsQueueGqlTypeDefs = `
  type WorkflowCronsQueue {
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
    getWorkflowCronsQueue(id: ID!): WorkflowCronsQueue
    listWorkflowCronsQueues(tenantId: String!, limit: Int): [WorkflowCronsQueue!]!
  }

  extend type Mutation {
    createWorkflowCronsQueue(tenantId: String!, code: String!, name: String!): WorkflowCronsQueue!
    deleteWorkflowCronsQueue(id: ID!): Boolean!
  }
`;

export const WorkflowCronsQueueGqlResolvers = {
  Query: {
    getWorkflowCronsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
