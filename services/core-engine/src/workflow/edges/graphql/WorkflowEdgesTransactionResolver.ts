export const WorkflowEdgesTransactionGqlTypeDefs = `
  type WorkflowEdgesTransaction {
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
    getWorkflowEdgesTransaction(id: ID!): WorkflowEdgesTransaction
    listWorkflowEdgesTransactions(tenantId: String!, limit: Int): [WorkflowEdgesTransaction!]!
  }

  extend type Mutation {
    createWorkflowEdgesTransaction(tenantId: String!, code: String!, name: String!): WorkflowEdgesTransaction!
    deleteWorkflowEdgesTransaction(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesTransactionGqlResolvers = {
  Query: {
    getWorkflowEdgesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
