export const WorkflowDagRecordGqlTypeDefs = `
  type WorkflowDagRecord {
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
    getWorkflowDagRecord(id: ID!): WorkflowDagRecord
    listWorkflowDagRecords(tenantId: String!, limit: Int): [WorkflowDagRecord!]!
  }

  extend type Mutation {
    createWorkflowDagRecord(tenantId: String!, code: String!, name: String!): WorkflowDagRecord!
    deleteWorkflowDagRecord(id: ID!): Boolean!
  }
`;

export const WorkflowDagRecordGqlResolvers = {
  Query: {
    getWorkflowDagRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
