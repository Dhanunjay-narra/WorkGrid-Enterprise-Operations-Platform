export const WorkflowVariablesEventGqlTypeDefs = `
  type WorkflowVariablesEvent {
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
    getWorkflowVariablesEvent(id: ID!): WorkflowVariablesEvent
    listWorkflowVariablesEvents(tenantId: String!, limit: Int): [WorkflowVariablesEvent!]!
  }

  extend type Mutation {
    createWorkflowVariablesEvent(tenantId: String!, code: String!, name: String!): WorkflowVariablesEvent!
    deleteWorkflowVariablesEvent(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesEventGqlResolvers = {
  Query: {
    getWorkflowVariablesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
