export const WorkflowCronsTransactionGqlTypeDefs = `
  type WorkflowCronsTransaction {
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
    getWorkflowCronsTransaction(id: ID!): WorkflowCronsTransaction
    listWorkflowCronsTransactions(tenantId: String!, limit: Int): [WorkflowCronsTransaction!]!
  }

  extend type Mutation {
    createWorkflowCronsTransaction(tenantId: String!, code: String!, name: String!): WorkflowCronsTransaction!
    deleteWorkflowCronsTransaction(id: ID!): Boolean!
  }
`;

export const WorkflowCronsTransactionGqlResolvers = {
  Query: {
    getWorkflowCronsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
