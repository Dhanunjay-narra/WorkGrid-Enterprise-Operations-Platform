export const WorkflowNodesRecordGqlTypeDefs = `
  type WorkflowNodesRecord {
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
    getWorkflowNodesRecord(id: ID!): WorkflowNodesRecord
    listWorkflowNodesRecords(tenantId: String!, limit: Int): [WorkflowNodesRecord!]!
  }

  extend type Mutation {
    createWorkflowNodesRecord(tenantId: String!, code: String!, name: String!): WorkflowNodesRecord!
    deleteWorkflowNodesRecord(id: ID!): Boolean!
  }
`;

export const WorkflowNodesRecordGqlResolvers = {
  Query: {
    getWorkflowNodesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
