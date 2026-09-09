export const WorkflowApprovalsTransactionGqlTypeDefs = `
  type WorkflowApprovalsTransaction {
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
    getWorkflowApprovalsTransaction(id: ID!): WorkflowApprovalsTransaction
    listWorkflowApprovalsTransactions(tenantId: String!, limit: Int): [WorkflowApprovalsTransaction!]!
  }

  extend type Mutation {
    createWorkflowApprovalsTransaction(tenantId: String!, code: String!, name: String!): WorkflowApprovalsTransaction!
    deleteWorkflowApprovalsTransaction(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsTransactionGqlResolvers = {
  Query: {
    getWorkflowApprovalsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
