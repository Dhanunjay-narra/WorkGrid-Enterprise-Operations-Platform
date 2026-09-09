export const WorkflowDagSnapshotGqlTypeDefs = `
  type WorkflowDagSnapshot {
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
    getWorkflowDagSnapshot(id: ID!): WorkflowDagSnapshot
    listWorkflowDagSnapshots(tenantId: String!, limit: Int): [WorkflowDagSnapshot!]!
  }

  extend type Mutation {
    createWorkflowDagSnapshot(tenantId: String!, code: String!, name: String!): WorkflowDagSnapshot!
    deleteWorkflowDagSnapshot(id: ID!): Boolean!
  }
`;

export const WorkflowDagSnapshotGqlResolvers = {
  Query: {
    getWorkflowDagSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
