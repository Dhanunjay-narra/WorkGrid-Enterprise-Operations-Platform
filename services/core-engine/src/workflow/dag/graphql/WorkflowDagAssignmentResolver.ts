export const WorkflowDagAssignmentGqlTypeDefs = `
  type WorkflowDagAssignment {
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
    getWorkflowDagAssignment(id: ID!): WorkflowDagAssignment
    listWorkflowDagAssignments(tenantId: String!, limit: Int): [WorkflowDagAssignment!]!
  }

  extend type Mutation {
    createWorkflowDagAssignment(tenantId: String!, code: String!, name: String!): WorkflowDagAssignment!
    deleteWorkflowDagAssignment(id: ID!): Boolean!
  }
`;

export const WorkflowDagAssignmentGqlResolvers = {
  Query: {
    getWorkflowDagAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
