export const WorkflowApprovalsSnapshotGqlTypeDefs = `
  type WorkflowApprovalsSnapshot {
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
    getWorkflowApprovalsSnapshot(id: ID!): WorkflowApprovalsSnapshot
    listWorkflowApprovalsSnapshots(tenantId: String!, limit: Int): [WorkflowApprovalsSnapshot!]!
  }

  extend type Mutation {
    createWorkflowApprovalsSnapshot(tenantId: String!, code: String!, name: String!): WorkflowApprovalsSnapshot!
    deleteWorkflowApprovalsSnapshot(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsSnapshotGqlResolvers = {
  Query: {
    getWorkflowApprovalsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
