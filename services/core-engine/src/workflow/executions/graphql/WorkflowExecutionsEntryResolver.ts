export const WorkflowExecutionsEntryGqlTypeDefs = `
  type WorkflowExecutionsEntry {
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
    getWorkflowExecutionsEntry(id: ID!): WorkflowExecutionsEntry
    listWorkflowExecutionsEntrys(tenantId: String!, limit: Int): [WorkflowExecutionsEntry!]!
  }

  extend type Mutation {
    createWorkflowExecutionsEntry(tenantId: String!, code: String!, name: String!): WorkflowExecutionsEntry!
    deleteWorkflowExecutionsEntry(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsEntryGqlResolvers = {
  Query: {
    getWorkflowExecutionsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
