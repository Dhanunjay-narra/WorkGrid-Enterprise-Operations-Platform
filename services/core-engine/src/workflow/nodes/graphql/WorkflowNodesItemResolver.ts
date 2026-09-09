export const WorkflowNodesItemGqlTypeDefs = `
  type WorkflowNodesItem {
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
    getWorkflowNodesItem(id: ID!): WorkflowNodesItem
    listWorkflowNodesItems(tenantId: String!, limit: Int): [WorkflowNodesItem!]!
  }

  extend type Mutation {
    createWorkflowNodesItem(tenantId: String!, code: String!, name: String!): WorkflowNodesItem!
    deleteWorkflowNodesItem(id: ID!): Boolean!
  }
`;

export const WorkflowNodesItemGqlResolvers = {
  Query: {
    getWorkflowNodesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
