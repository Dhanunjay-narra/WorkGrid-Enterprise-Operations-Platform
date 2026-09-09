export const WorkflowVariablesItemGqlTypeDefs = `
  type WorkflowVariablesItem {
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
    getWorkflowVariablesItem(id: ID!): WorkflowVariablesItem
    listWorkflowVariablesItems(tenantId: String!, limit: Int): [WorkflowVariablesItem!]!
  }

  extend type Mutation {
    createWorkflowVariablesItem(tenantId: String!, code: String!, name: String!): WorkflowVariablesItem!
    deleteWorkflowVariablesItem(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesItemGqlResolvers = {
  Query: {
    getWorkflowVariablesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
