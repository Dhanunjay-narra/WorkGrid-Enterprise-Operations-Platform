export const WorkflowExecutionsItemGqlTypeDefs = `
  type WorkflowExecutionsItem {
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
    getWorkflowExecutionsItem(id: ID!): WorkflowExecutionsItem
    listWorkflowExecutionsItems(tenantId: String!, limit: Int): [WorkflowExecutionsItem!]!
  }

  extend type Mutation {
    createWorkflowExecutionsItem(tenantId: String!, code: String!, name: String!): WorkflowExecutionsItem!
    deleteWorkflowExecutionsItem(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsItemGqlResolvers = {
  Query: {
    getWorkflowExecutionsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
