export const WorkflowVariablesEntryGqlTypeDefs = `
  type WorkflowVariablesEntry {
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
    getWorkflowVariablesEntry(id: ID!): WorkflowVariablesEntry
    listWorkflowVariablesEntrys(tenantId: String!, limit: Int): [WorkflowVariablesEntry!]!
  }

  extend type Mutation {
    createWorkflowVariablesEntry(tenantId: String!, code: String!, name: String!): WorkflowVariablesEntry!
    deleteWorkflowVariablesEntry(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesEntryGqlResolvers = {
  Query: {
    getWorkflowVariablesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
