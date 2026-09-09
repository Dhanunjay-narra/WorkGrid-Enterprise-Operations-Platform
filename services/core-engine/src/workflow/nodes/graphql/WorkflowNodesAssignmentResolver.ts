export const WorkflowNodesAssignmentGqlTypeDefs = `
  type WorkflowNodesAssignment {
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
    getWorkflowNodesAssignment(id: ID!): WorkflowNodesAssignment
    listWorkflowNodesAssignments(tenantId: String!, limit: Int): [WorkflowNodesAssignment!]!
  }

  extend type Mutation {
    createWorkflowNodesAssignment(tenantId: String!, code: String!, name: String!): WorkflowNodesAssignment!
    deleteWorkflowNodesAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowNodesAssignmentGqlResolvers = {
  Query: {
    getWorkflowNodesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
