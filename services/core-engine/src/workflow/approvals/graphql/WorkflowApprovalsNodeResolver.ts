export const WorkflowApprovalsNodeGqlTypeDefs = `
  type WorkflowApprovalsNode {
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
    getWorkflowApprovalsNode(id: ID!): WorkflowApprovalsNode
    listWorkflowApprovalsNodes(tenantId: String!, limit: Int): [WorkflowApprovalsNode!]!
  }

  extend type Mutation {
    createWorkflowApprovalsNode(tenantId: String!, code: String!, name: String!): WorkflowApprovalsNode!
    deleteWorkflowApprovalsNode(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsNodeGqlResolvers = {
  Query: {
    getWorkflowApprovalsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
