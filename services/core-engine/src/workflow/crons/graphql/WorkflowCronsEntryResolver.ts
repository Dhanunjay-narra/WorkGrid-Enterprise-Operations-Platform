export const WorkflowCronsEntryGqlTypeDefs = `
  type WorkflowCronsEntry {
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
    getWorkflowCronsEntry(id: ID!): WorkflowCronsEntry
    listWorkflowCronsEntrys(tenantId: String!, limit: Int): [WorkflowCronsEntry!]!
  }

  extend type Mutation {
    createWorkflowCronsEntry(tenantId: String!, code: String!, name: String!): WorkflowCronsEntry!
    deleteWorkflowCronsEntry(id: ID!): Boolean!
  }
`;

export const WorkflowCronsEntryGqlResolvers = {
  Query: {
    getWorkflowCronsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
