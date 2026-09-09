export const WorkflowEdgesItemGqlTypeDefs = `
  type WorkflowEdgesItem {
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
    getWorkflowEdgesItem(id: ID!): WorkflowEdgesItem
    listWorkflowEdgesItems(tenantId: String!, limit: Int): [WorkflowEdgesItem!]!
  }

  extend type Mutation {
    createWorkflowEdgesItem(tenantId: String!, code: String!, name: String!): WorkflowEdgesItem!
    deleteWorkflowEdgesItem(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesItemGqlResolvers = {
  Query: {
    getWorkflowEdgesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
