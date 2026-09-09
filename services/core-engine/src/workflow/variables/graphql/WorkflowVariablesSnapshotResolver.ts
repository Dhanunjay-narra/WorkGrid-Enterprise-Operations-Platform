export const WorkflowVariablesSnapshotGqlTypeDefs = `
  type WorkflowVariablesSnapshot {
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
    getWorkflowVariablesSnapshot(id: ID!): WorkflowVariablesSnapshot
    listWorkflowVariablesSnapshots(tenantId: String!, limit: Int): [WorkflowVariablesSnapshot!]!
  }

  extend type Mutation {
    createWorkflowVariablesSnapshot(tenantId: String!, code: String!, name: String!): WorkflowVariablesSnapshot!
    deleteWorkflowVariablesSnapshot(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesSnapshotGqlResolvers = {
  Query: {
    getWorkflowVariablesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
