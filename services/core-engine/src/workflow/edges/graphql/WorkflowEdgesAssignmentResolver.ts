export const WorkflowEdgesAssignmentGqlTypeDefs = `
  type WorkflowEdgesAssignment {
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
    getWorkflowEdgesAssignment(id: ID!): WorkflowEdgesAssignment
    listWorkflowEdgesAssignments(tenantId: String!, limit: Int): [WorkflowEdgesAssignment!]!
  }

  extend type Mutation {
    createWorkflowEdgesAssignment(tenantId: String!, code: String!, name: String!): WorkflowEdgesAssignment!
    deleteWorkflowEdgesAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesAssignmentGqlResolvers = {
  Query: {
    getWorkflowEdgesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
