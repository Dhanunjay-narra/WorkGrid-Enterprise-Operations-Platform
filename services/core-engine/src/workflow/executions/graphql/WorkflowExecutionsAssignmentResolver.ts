export const WorkflowExecutionsAssignmentGqlTypeDefs = `
  type WorkflowExecutionsAssignment {
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
    getWorkflowExecutionsAssignment(id: ID!): WorkflowExecutionsAssignment
    listWorkflowExecutionsAssignments(tenantId: String!, limit: Int): [WorkflowExecutionsAssignment!]!
  }

  extend type Mutation {
    createWorkflowExecutionsAssignment(tenantId: String!, code: String!, name: String!): WorkflowExecutionsAssignment!
    deleteWorkflowExecutionsAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsAssignmentGqlResolvers = {
  Query: {
    getWorkflowExecutionsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
