export const WorkflowDagStateGqlTypeDefs = `
  type WorkflowDagState {
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
    getWorkflowDagState(id: ID!): WorkflowDagState
    listWorkflowDagStates(tenantId: String!, limit: Int): [WorkflowDagState!]!
  }

  extend type Mutation {
    createWorkflowDagState(tenantId: String!, code: String!, name: String!): WorkflowDagState!
    deleteWorkflowDagState(id: ID!): Boolean!
  }
`;

export const WorkflowDagStateGqlResolvers = {
  Query: {
    getWorkflowDagState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
