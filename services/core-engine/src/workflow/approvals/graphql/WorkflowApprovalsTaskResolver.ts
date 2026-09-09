export const WorkflowApprovalsTaskGqlTypeDefs = `
  type WorkflowApprovalsTask {
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
    getWorkflowApprovalsTask(id: ID!): WorkflowApprovalsTask
    listWorkflowApprovalsTasks(tenantId: String!, limit: Int): [WorkflowApprovalsTask!]!
  }

  extend type Mutation {
    createWorkflowApprovalsTask(tenantId: String!, code: String!, name: String!): WorkflowApprovalsTask!
    deleteWorkflowApprovalsTask(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsTaskGqlResolvers = {
  Query: {
    getWorkflowApprovalsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
