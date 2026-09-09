export const WorkflowDagItemGqlTypeDefs = `
  type WorkflowDagItem {
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
    getWorkflowDagItem(id: ID!): WorkflowDagItem
    listWorkflowDagItems(tenantId: String!, limit: Int): [WorkflowDagItem!]!
  }

  extend type Mutation {
    createWorkflowDagItem(tenantId: String!, code: String!, name: String!): WorkflowDagItem!
    deleteWorkflowDagItem(id: ID!): Boolean!
  }
`;

export const WorkflowDagItemGqlResolvers = {
  Query: {
    getWorkflowDagItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
