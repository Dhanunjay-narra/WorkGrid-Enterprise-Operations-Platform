export const WorkflowEdgesRecordGqlTypeDefs = `
  type WorkflowEdgesRecord {
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
    getWorkflowEdgesRecord(id: ID!): WorkflowEdgesRecord
    listWorkflowEdgesRecords(tenantId: String!, limit: Int): [WorkflowEdgesRecord!]!
  }

  extend type Mutation {
    createWorkflowEdgesRecord(tenantId: String!, code: String!, name: String!): WorkflowEdgesRecord!
    deleteWorkflowEdgesRecord(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesRecordGqlResolvers = {
  Query: {
    getWorkflowEdgesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
