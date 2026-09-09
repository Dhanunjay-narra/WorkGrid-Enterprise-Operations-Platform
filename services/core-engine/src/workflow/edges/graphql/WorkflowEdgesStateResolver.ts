export const WorkflowEdgesStateGqlTypeDefs = `
  type WorkflowEdgesState {
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
    getWorkflowEdgesState(id: ID!): WorkflowEdgesState
    listWorkflowEdgesStates(tenantId: String!, limit: Int): [WorkflowEdgesState!]!
  }

  extend type Mutation {
    createWorkflowEdgesState(tenantId: String!, code: String!, name: String!): WorkflowEdgesState!
    deleteWorkflowEdgesState(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesStateGqlResolvers = {
  Query: {
    getWorkflowEdgesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
