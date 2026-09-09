export const WorkflowNodesEventGqlTypeDefs = `
  type WorkflowNodesEvent {
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
    getWorkflowNodesEvent(id: ID!): WorkflowNodesEvent
    listWorkflowNodesEvents(tenantId: String!, limit: Int): [WorkflowNodesEvent!]!
  }

  extend type Mutation {
    createWorkflowNodesEvent(tenantId: String!, code: String!, name: String!): WorkflowNodesEvent!
    deleteWorkflowNodesEvent(id: ID!): Boolean!
  }
`;

export const WorkflowNodesEventGqlResolvers = {
  Query: {
    getWorkflowNodesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
