export const WorkflowEdgesEventGqlTypeDefs = `
  type WorkflowEdgesEvent {
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
    getWorkflowEdgesEvent(id: ID!): WorkflowEdgesEvent
    listWorkflowEdgesEvents(tenantId: String!, limit: Int): [WorkflowEdgesEvent!]!
  }

  extend type Mutation {
    createWorkflowEdgesEvent(tenantId: String!, code: String!, name: String!): WorkflowEdgesEvent!
    deleteWorkflowEdgesEvent(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesEventGqlResolvers = {
  Query: {
    getWorkflowEdgesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
