export const WorkflowEdgesEntryGqlTypeDefs = `
  type WorkflowEdgesEntry {
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
    getWorkflowEdgesEntry(id: ID!): WorkflowEdgesEntry
    listWorkflowEdgesEntrys(tenantId: String!, limit: Int): [WorkflowEdgesEntry!]!
  }

  extend type Mutation {
    createWorkflowEdgesEntry(tenantId: String!, code: String!, name: String!): WorkflowEdgesEntry!
    deleteWorkflowEdgesEntry(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesEntryGqlResolvers = {
  Query: {
    getWorkflowEdgesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
