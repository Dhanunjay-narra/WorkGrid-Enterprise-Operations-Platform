export const WorkflowExecutionsStateGqlTypeDefs = `
  type WorkflowExecutionsState {
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
    getWorkflowExecutionsState(id: ID!): WorkflowExecutionsState
    listWorkflowExecutionsStates(tenantId: String!, limit: Int): [WorkflowExecutionsState!]!
  }

  extend type Mutation {
    createWorkflowExecutionsState(tenantId: String!, code: String!, name: String!): WorkflowExecutionsState!
    deleteWorkflowExecutionsState(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsStateGqlResolvers = {
  Query: {
    getWorkflowExecutionsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
