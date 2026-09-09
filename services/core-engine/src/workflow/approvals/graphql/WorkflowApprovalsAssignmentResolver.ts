export const WorkflowApprovalsAssignmentGqlTypeDefs = `
  type WorkflowApprovalsAssignment {
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
    getWorkflowApprovalsAssignment(id: ID!): WorkflowApprovalsAssignment
    listWorkflowApprovalsAssignments(tenantId: String!, limit: Int): [WorkflowApprovalsAssignment!]!
  }

  extend type Mutation {
    createWorkflowApprovalsAssignment(tenantId: String!, code: String!, name: String!): WorkflowApprovalsAssignment!
    deleteWorkflowApprovalsAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsAssignmentGqlResolvers = {
  Query: {
    getWorkflowApprovalsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
