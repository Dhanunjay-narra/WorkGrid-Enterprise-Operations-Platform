export const WorkflowVariablesAssignmentGqlTypeDefs = `
  type WorkflowVariablesAssignment {
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
    getWorkflowVariablesAssignment(id: ID!): WorkflowVariablesAssignment
    listWorkflowVariablesAssignments(tenantId: String!, limit: Int): [WorkflowVariablesAssignment!]!
  }

  extend type Mutation {
    createWorkflowVariablesAssignment(tenantId: String!, code: String!, name: String!): WorkflowVariablesAssignment!
    deleteWorkflowVariablesAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesAssignmentGqlResolvers = {
  Query: {
    getWorkflowVariablesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
