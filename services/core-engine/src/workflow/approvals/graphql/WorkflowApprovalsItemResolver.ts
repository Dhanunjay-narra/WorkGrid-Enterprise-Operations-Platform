export const WorkflowApprovalsItemGqlTypeDefs = `
  type WorkflowApprovalsItem {
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
    getWorkflowApprovalsItem(id: ID!): WorkflowApprovalsItem
    listWorkflowApprovalsItems(tenantId: String!, limit: Int): [WorkflowApprovalsItem!]!
  }

  extend type Mutation {
    createWorkflowApprovalsItem(tenantId: String!, code: String!, name: String!): WorkflowApprovalsItem!
    deleteWorkflowApprovalsItem(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsItemGqlResolvers = {
  Query: {
    getWorkflowApprovalsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
