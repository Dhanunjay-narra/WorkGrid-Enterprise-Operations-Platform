export const WorkflowCronsItemGqlTypeDefs = `
  type WorkflowCronsItem {
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
    getWorkflowCronsItem(id: ID!): WorkflowCronsItem
    listWorkflowCronsItems(tenantId: String!, limit: Int): [WorkflowCronsItem!]!
  }

  extend type Mutation {
    createWorkflowCronsItem(tenantId: String!, code: String!, name: String!): WorkflowCronsItem!
    deleteWorkflowCronsItem(id: ID!): Boolean!
  }
`;

export const WorkflowCronsItemGqlResolvers = {
  Query: {
    getWorkflowCronsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
