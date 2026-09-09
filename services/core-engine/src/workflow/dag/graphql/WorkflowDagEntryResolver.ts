export const WorkflowDagEntryGqlTypeDefs = `
  type WorkflowDagEntry {
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
    getWorkflowDagEntry(id: ID!): WorkflowDagEntry
    listWorkflowDagEntrys(tenantId: String!, limit: Int): [WorkflowDagEntry!]!
  }

  extend type Mutation {
    createWorkflowDagEntry(tenantId: String!, code: String!, name: String!): WorkflowDagEntry!
    deleteWorkflowDagEntry(id: ID!): Boolean!
  }
`;

export const WorkflowDagEntryGqlResolvers = {
  Query: {
    getWorkflowDagEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
