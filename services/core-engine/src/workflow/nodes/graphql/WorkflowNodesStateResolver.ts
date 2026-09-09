export const WorkflowNodesStateGqlTypeDefs = `
  type WorkflowNodesState {
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
    getWorkflowNodesState(id: ID!): WorkflowNodesState
    listWorkflowNodesStates(tenantId: String!, limit: Int): [WorkflowNodesState!]!
  }

  extend type Mutation {
    createWorkflowNodesState(tenantId: String!, code: String!, name: String!): WorkflowNodesState!
    deleteWorkflowNodesState(id: ID!): Boolean!
  }
`;

export const WorkflowNodesStateGqlResolvers = {
  Query: {
    getWorkflowNodesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
