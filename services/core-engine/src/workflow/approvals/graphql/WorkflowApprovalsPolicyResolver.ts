export const WorkflowApprovalsPolicyGqlTypeDefs = `
  type WorkflowApprovalsPolicy {
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
    getWorkflowApprovalsPolicy(id: ID!): WorkflowApprovalsPolicy
    listWorkflowApprovalsPolicys(tenantId: String!, limit: Int): [WorkflowApprovalsPolicy!]!
  }

  extend type Mutation {
    createWorkflowApprovalsPolicy(tenantId: String!, code: String!, name: String!): WorkflowApprovalsPolicy!
    deleteWorkflowApprovalsPolicy(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsPolicyGqlResolvers = {
  Query: {
    getWorkflowApprovalsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
