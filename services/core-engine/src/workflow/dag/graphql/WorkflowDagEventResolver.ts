export const WorkflowDagEventGqlTypeDefs = `
  type WorkflowDagEvent {
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
    getWorkflowDagEvent(id: ID!): WorkflowDagEvent
    listWorkflowDagEvents(tenantId: String!, limit: Int): [WorkflowDagEvent!]!
  }

  extend type Mutation {
    createWorkflowDagEvent(tenantId: String!, code: String!, name: String!): WorkflowDagEvent!
    deleteWorkflowDagEvent(id: ID!): Boolean!
  }
`;

export const WorkflowDagEventGqlResolvers = {
  Query: {
    getWorkflowDagEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
