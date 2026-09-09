export const WorkflowEdgesSnapshotGqlTypeDefs = `
  type WorkflowEdgesSnapshot {
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
    getWorkflowEdgesSnapshot(id: ID!): WorkflowEdgesSnapshot
    listWorkflowEdgesSnapshots(tenantId: String!, limit: Int): [WorkflowEdgesSnapshot!]!
  }

  extend type Mutation {
    createWorkflowEdgesSnapshot(tenantId: String!, code: String!, name: String!): WorkflowEdgesSnapshot!
    deleteWorkflowEdgesSnapshot(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesSnapshotGqlResolvers = {
  Query: {
    getWorkflowEdgesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
