export const WorkflowRetriesTransactionGqlTypeDefs = `
  type WorkflowRetriesTransaction {
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
    getWorkflowRetriesTransaction(id: ID!): WorkflowRetriesTransaction
    listWorkflowRetriesTransactions(tenantId: String!, limit: Int): [WorkflowRetriesTransaction!]!
  }

  extend type Mutation {
    createWorkflowRetriesTransaction(tenantId: String!, code: String!, name: String!): WorkflowRetriesTransaction!
    deleteWorkflowRetriesTransaction(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesTransactionGqlResolvers = {
  Query: {
    getWorkflowRetriesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
