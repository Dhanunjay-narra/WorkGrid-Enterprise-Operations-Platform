export const WorkflowVariablesTransactionGqlTypeDefs = `
  type WorkflowVariablesTransaction {
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
    getWorkflowVariablesTransaction(id: ID!): WorkflowVariablesTransaction
    listWorkflowVariablesTransactions(tenantId: String!, limit: Int): [WorkflowVariablesTransaction!]!
  }

  extend type Mutation {
    createWorkflowVariablesTransaction(tenantId: String!, code: String!, name: String!): WorkflowVariablesTransaction!
    deleteWorkflowVariablesTransaction(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesTransactionGqlResolvers = {
  Query: {
    getWorkflowVariablesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
