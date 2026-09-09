export const WorkflowRetriesEntryGqlTypeDefs = `
  type WorkflowRetriesEntry {
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
    getWorkflowRetriesEntry(id: ID!): WorkflowRetriesEntry
    listWorkflowRetriesEntrys(tenantId: String!, limit: Int): [WorkflowRetriesEntry!]!
  }

  extend type Mutation {
    createWorkflowRetriesEntry(tenantId: String!, code: String!, name: String!): WorkflowRetriesEntry!
    deleteWorkflowRetriesEntry(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesEntryGqlResolvers = {
  Query: {
    getWorkflowRetriesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
