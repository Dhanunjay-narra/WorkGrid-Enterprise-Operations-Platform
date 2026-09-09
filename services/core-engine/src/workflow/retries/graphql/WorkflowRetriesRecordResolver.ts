export const WorkflowRetriesRecordGqlTypeDefs = `
  type WorkflowRetriesRecord {
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
    getWorkflowRetriesRecord(id: ID!): WorkflowRetriesRecord
    listWorkflowRetriesRecords(tenantId: String!, limit: Int): [WorkflowRetriesRecord!]!
  }

  extend type Mutation {
    createWorkflowRetriesRecord(tenantId: String!, code: String!, name: String!): WorkflowRetriesRecord!
    deleteWorkflowRetriesRecord(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesRecordGqlResolvers = {
  Query: {
    getWorkflowRetriesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
