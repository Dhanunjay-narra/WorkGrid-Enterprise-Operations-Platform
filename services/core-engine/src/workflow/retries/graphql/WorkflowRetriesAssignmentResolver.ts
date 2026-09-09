export const WorkflowRetriesAssignmentGqlTypeDefs = `
  type WorkflowRetriesAssignment {
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
    getWorkflowRetriesAssignment(id: ID!): WorkflowRetriesAssignment
    listWorkflowRetriesAssignments(tenantId: String!, limit: Int): [WorkflowRetriesAssignment!]!
  }

  extend type Mutation {
    createWorkflowRetriesAssignment(tenantId: String!, code: String!, name: String!): WorkflowRetriesAssignment!
    deleteWorkflowRetriesAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesAssignmentGqlResolvers = {
  Query: {
    getWorkflowRetriesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
