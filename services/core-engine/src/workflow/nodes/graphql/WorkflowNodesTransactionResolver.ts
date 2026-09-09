export const WorkflowNodesTransactionGqlTypeDefs = `
  type WorkflowNodesTransaction {
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
    getWorkflowNodesTransaction(id: ID!): WorkflowNodesTransaction
    listWorkflowNodesTransactions(tenantId: String!, limit: Int): [WorkflowNodesTransaction!]!
  }

  extend type Mutation {
    createWorkflowNodesTransaction(tenantId: String!, code: String!, name: String!): WorkflowNodesTransaction!
    deleteWorkflowNodesTransaction(id: ID!): Boolean!
  }
`;

export const WorkflowNodesTransactionGqlResolvers = {
  Query: {
    getWorkflowNodesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
