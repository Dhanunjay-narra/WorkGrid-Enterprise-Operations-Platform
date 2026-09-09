export const WorkflowVariablesTaskGqlTypeDefs = `
  type WorkflowVariablesTask {
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
    getWorkflowVariablesTask(id: ID!): WorkflowVariablesTask
    listWorkflowVariablesTasks(tenantId: String!, limit: Int): [WorkflowVariablesTask!]!
  }

  extend type Mutation {
    createWorkflowVariablesTask(tenantId: String!, code: String!, name: String!): WorkflowVariablesTask!
    deleteWorkflowVariablesTask(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesTaskGqlResolvers = {
  Query: {
    getWorkflowVariablesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
