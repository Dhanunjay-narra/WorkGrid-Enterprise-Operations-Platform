export const WorkflowCronsRecordGqlTypeDefs = `
  type WorkflowCronsRecord {
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
    getWorkflowCronsRecord(id: ID!): WorkflowCronsRecord
    listWorkflowCronsRecords(tenantId: String!, limit: Int): [WorkflowCronsRecord!]!
  }

  extend type Mutation {
    createWorkflowCronsRecord(tenantId: String!, code: String!, name: String!): WorkflowCronsRecord!
    deleteWorkflowCronsRecord(id: ID!): Boolean!
  }
`;

export const WorkflowCronsRecordGqlResolvers = {
  Query: {
    getWorkflowCronsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
