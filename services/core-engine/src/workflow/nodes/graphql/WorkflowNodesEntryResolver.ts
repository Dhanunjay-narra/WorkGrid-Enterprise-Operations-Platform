export const WorkflowNodesEntryGqlTypeDefs = `
  type WorkflowNodesEntry {
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
    getWorkflowNodesEntry(id: ID!): WorkflowNodesEntry
    listWorkflowNodesEntrys(tenantId: String!, limit: Int): [WorkflowNodesEntry!]!
  }

  extend type Mutation {
    createWorkflowNodesEntry(tenantId: String!, code: String!, name: String!): WorkflowNodesEntry!
    deleteWorkflowNodesEntry(id: ID!): Boolean!
  }
`;

export const WorkflowNodesEntryGqlResolvers = {
  Query: {
    getWorkflowNodesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
