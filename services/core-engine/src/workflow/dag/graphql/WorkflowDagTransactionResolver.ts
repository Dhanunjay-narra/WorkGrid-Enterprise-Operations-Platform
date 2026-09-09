export const WorkflowDagTransactionGqlTypeDefs = `
  type WorkflowDagTransaction {
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
    getWorkflowDagTransaction(id: ID!): WorkflowDagTransaction
    listWorkflowDagTransactions(tenantId: String!, limit: Int): [WorkflowDagTransaction!]!
  }

  extend type Mutation {
    createWorkflowDagTransaction(tenantId: String!, code: String!, name: String!): WorkflowDagTransaction!
    deleteWorkflowDagTransaction(id: ID!): Boolean!
  }
`;

export const WorkflowDagTransactionGqlResolvers = {
  Query: {
    getWorkflowDagTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
