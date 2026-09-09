export const WorkflowRetriesSnapshotGqlTypeDefs = `
  type WorkflowRetriesSnapshot {
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
    getWorkflowRetriesSnapshot(id: ID!): WorkflowRetriesSnapshot
    listWorkflowRetriesSnapshots(tenantId: String!, limit: Int): [WorkflowRetriesSnapshot!]!
  }

  extend type Mutation {
    createWorkflowRetriesSnapshot(tenantId: String!, code: String!, name: String!): WorkflowRetriesSnapshot!
    deleteWorkflowRetriesSnapshot(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesSnapshotGqlResolvers = {
  Query: {
    getWorkflowRetriesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
