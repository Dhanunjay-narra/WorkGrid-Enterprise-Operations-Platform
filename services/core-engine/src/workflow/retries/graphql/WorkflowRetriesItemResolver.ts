export const WorkflowRetriesItemGqlTypeDefs = `
  type WorkflowRetriesItem {
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
    getWorkflowRetriesItem(id: ID!): WorkflowRetriesItem
    listWorkflowRetriesItems(tenantId: String!, limit: Int): [WorkflowRetriesItem!]!
  }

  extend type Mutation {
    createWorkflowRetriesItem(tenantId: String!, code: String!, name: String!): WorkflowRetriesItem!
    deleteWorkflowRetriesItem(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesItemGqlResolvers = {
  Query: {
    getWorkflowRetriesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
