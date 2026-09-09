export const WorkflowCronsAssignmentGqlTypeDefs = `
  type WorkflowCronsAssignment {
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
    getWorkflowCronsAssignment(id: ID!): WorkflowCronsAssignment
    listWorkflowCronsAssignments(tenantId: String!, limit: Int): [WorkflowCronsAssignment!]!
  }

  extend type Mutation {
    createWorkflowCronsAssignment(tenantId: String!, code: String!, name: String!): WorkflowCronsAssignment!
    deleteWorkflowCronsAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowCronsAssignmentGqlResolvers = {
  Query: {
    getWorkflowCronsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
