export const WorkflowRetriesEventGqlTypeDefs = `
  type WorkflowRetriesEvent {
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
    getWorkflowRetriesEvent(id: ID!): WorkflowRetriesEvent
    listWorkflowRetriesEvents(tenantId: String!, limit: Int): [WorkflowRetriesEvent!]!
  }

  extend type Mutation {
    createWorkflowRetriesEvent(tenantId: String!, code: String!, name: String!): WorkflowRetriesEvent!
    deleteWorkflowRetriesEvent(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesEventGqlResolvers = {
  Query: {
    getWorkflowRetriesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
