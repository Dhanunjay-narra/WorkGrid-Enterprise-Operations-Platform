export const WorkflowApprovalsRecordGqlTypeDefs = `
  type WorkflowApprovalsRecord {
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
    getWorkflowApprovalsRecord(id: ID!): WorkflowApprovalsRecord
    listWorkflowApprovalsRecords(tenantId: String!, limit: Int): [WorkflowApprovalsRecord!]!
  }

  extend type Mutation {
    createWorkflowApprovalsRecord(tenantId: String!, code: String!, name: String!): WorkflowApprovalsRecord!
    deleteWorkflowApprovalsRecord(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsRecordGqlResolvers = {
  Query: {
    getWorkflowApprovalsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
