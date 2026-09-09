export const WorkflowApprovalsEntryGqlTypeDefs = `
  type WorkflowApprovalsEntry {
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
    getWorkflowApprovalsEntry(id: ID!): WorkflowApprovalsEntry
    listWorkflowApprovalsEntrys(tenantId: String!, limit: Int): [WorkflowApprovalsEntry!]!
  }

  extend type Mutation {
    createWorkflowApprovalsEntry(tenantId: String!, code: String!, name: String!): WorkflowApprovalsEntry!
    deleteWorkflowApprovalsEntry(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsEntryGqlResolvers = {
  Query: {
    getWorkflowApprovalsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
