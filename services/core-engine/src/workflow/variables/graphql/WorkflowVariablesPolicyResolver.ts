export const WorkflowVariablesPolicyGqlTypeDefs = `
  type WorkflowVariablesPolicy {
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
    getWorkflowVariablesPolicy(id: ID!): WorkflowVariablesPolicy
    listWorkflowVariablesPolicys(tenantId: String!, limit: Int): [WorkflowVariablesPolicy!]!
  }

  extend type Mutation {
    createWorkflowVariablesPolicy(tenantId: String!, code: String!, name: String!): WorkflowVariablesPolicy!
    deleteWorkflowVariablesPolicy(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesPolicyGqlResolvers = {
  Query: {
    getWorkflowVariablesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
