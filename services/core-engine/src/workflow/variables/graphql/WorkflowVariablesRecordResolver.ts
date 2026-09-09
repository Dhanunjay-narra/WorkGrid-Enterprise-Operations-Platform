export const WorkflowVariablesRecordGqlTypeDefs = `
  type WorkflowVariablesRecord {
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
    getWorkflowVariablesRecord(id: ID!): WorkflowVariablesRecord
    listWorkflowVariablesRecords(tenantId: String!, limit: Int): [WorkflowVariablesRecord!]!
  }

  extend type Mutation {
    createWorkflowVariablesRecord(tenantId: String!, code: String!, name: String!): WorkflowVariablesRecord!
    deleteWorkflowVariablesRecord(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesRecordGqlResolvers = {
  Query: {
    getWorkflowVariablesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
