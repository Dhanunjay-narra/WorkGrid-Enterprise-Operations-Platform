export const WorkflowApprovalsStateGqlTypeDefs = `
  type WorkflowApprovalsState {
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
    getWorkflowApprovalsState(id: ID!): WorkflowApprovalsState
    listWorkflowApprovalsStates(tenantId: String!, limit: Int): [WorkflowApprovalsState!]!
  }

  extend type Mutation {
    createWorkflowApprovalsState(tenantId: String!, code: String!, name: String!): WorkflowApprovalsState!
    deleteWorkflowApprovalsState(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsStateGqlResolvers = {
  Query: {
    getWorkflowApprovalsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
