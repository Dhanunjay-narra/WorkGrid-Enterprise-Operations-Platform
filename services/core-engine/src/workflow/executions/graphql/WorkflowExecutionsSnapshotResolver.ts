export const WorkflowExecutionsSnapshotGqlTypeDefs = `
  type WorkflowExecutionsSnapshot {
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
    getWorkflowExecutionsSnapshot(id: ID!): WorkflowExecutionsSnapshot
    listWorkflowExecutionsSnapshots(tenantId: String!, limit: Int): [WorkflowExecutionsSnapshot!]!
  }

  extend type Mutation {
    createWorkflowExecutionsSnapshot(tenantId: String!, code: String!, name: String!): WorkflowExecutionsSnapshot!
    deleteWorkflowExecutionsSnapshot(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsSnapshotGqlResolvers = {
  Query: {
    getWorkflowExecutionsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
