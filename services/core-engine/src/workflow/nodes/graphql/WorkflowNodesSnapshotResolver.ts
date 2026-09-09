export const WorkflowNodesSnapshotGqlTypeDefs = `
  type WorkflowNodesSnapshot {
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
    getWorkflowNodesSnapshot(id: ID!): WorkflowNodesSnapshot
    listWorkflowNodesSnapshots(tenantId: String!, limit: Int): [WorkflowNodesSnapshot!]!
  }

  extend type Mutation {
    createWorkflowNodesSnapshot(tenantId: String!, code: String!, name: String!): WorkflowNodesSnapshot!
    deleteWorkflowNodesSnapshot(id: ID!): Boolean!
  }
`;

export const WorkflowNodesSnapshotGqlResolvers = {
  Query: {
    getWorkflowNodesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
