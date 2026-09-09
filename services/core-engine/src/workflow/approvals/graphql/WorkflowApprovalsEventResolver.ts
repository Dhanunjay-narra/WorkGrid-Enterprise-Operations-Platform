export const WorkflowApprovalsEventGqlTypeDefs = `
  type WorkflowApprovalsEvent {
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
    getWorkflowApprovalsEvent(id: ID!): WorkflowApprovalsEvent
    listWorkflowApprovalsEvents(tenantId: String!, limit: Int): [WorkflowApprovalsEvent!]!
  }

  extend type Mutation {
    createWorkflowApprovalsEvent(tenantId: String!, code: String!, name: String!): WorkflowApprovalsEvent!
    deleteWorkflowApprovalsEvent(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsEventGqlResolvers = {
  Query: {
    getWorkflowApprovalsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
