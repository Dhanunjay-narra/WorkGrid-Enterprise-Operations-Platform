export const WorkflowCronsStateGqlTypeDefs = `
  type WorkflowCronsState {
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
    getWorkflowCronsState(id: ID!): WorkflowCronsState
    listWorkflowCronsStates(tenantId: String!, limit: Int): [WorkflowCronsState!]!
  }

  extend type Mutation {
    createWorkflowCronsState(tenantId: String!, code: String!, name: String!): WorkflowCronsState!
    deleteWorkflowCronsState(id: ID!): Boolean!
  }
`;

export const WorkflowCronsStateGqlResolvers = {
  Query: {
    getWorkflowCronsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
