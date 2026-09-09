export const WorkflowVariablesStateGqlTypeDefs = `
  type WorkflowVariablesState {
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
    getWorkflowVariablesState(id: ID!): WorkflowVariablesState
    listWorkflowVariablesStates(tenantId: String!, limit: Int): [WorkflowVariablesState!]!
  }

  extend type Mutation {
    createWorkflowVariablesState(tenantId: String!, code: String!, name: String!): WorkflowVariablesState!
    deleteWorkflowVariablesState(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesStateGqlResolvers = {
  Query: {
    getWorkflowVariablesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
