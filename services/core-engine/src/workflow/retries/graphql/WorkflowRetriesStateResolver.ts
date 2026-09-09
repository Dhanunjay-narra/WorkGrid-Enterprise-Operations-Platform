export const WorkflowRetriesStateGqlTypeDefs = `
  type WorkflowRetriesState {
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
    getWorkflowRetriesState(id: ID!): WorkflowRetriesState
    listWorkflowRetriesStates(tenantId: String!, limit: Int): [WorkflowRetriesState!]!
  }

  extend type Mutation {
    createWorkflowRetriesState(tenantId: String!, code: String!, name: String!): WorkflowRetriesState!
    deleteWorkflowRetriesState(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesStateGqlResolvers = {
  Query: {
    getWorkflowRetriesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
