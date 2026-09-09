export const WorkflowApprovalsBatchGqlTypeDefs = `
  type WorkflowApprovalsBatch {
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
    getWorkflowApprovalsBatch(id: ID!): WorkflowApprovalsBatch
    listWorkflowApprovalsBatchs(tenantId: String!, limit: Int): [WorkflowApprovalsBatch!]!
  }

  extend type Mutation {
    createWorkflowApprovalsBatch(tenantId: String!, code: String!, name: String!): WorkflowApprovalsBatch!
    deleteWorkflowApprovalsBatch(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsBatchGqlResolvers = {
  Query: {
    getWorkflowApprovalsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
