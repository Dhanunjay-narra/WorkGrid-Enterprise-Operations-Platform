export const WorkflowCronsEventGqlTypeDefs = `
  type WorkflowCronsEvent {
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
    getWorkflowCronsEvent(id: ID!): WorkflowCronsEvent
    listWorkflowCronsEvents(tenantId: String!, limit: Int): [WorkflowCronsEvent!]!
  }

  extend type Mutation {
    createWorkflowCronsEvent(tenantId: String!, code: String!, name: String!): WorkflowCronsEvent!
    deleteWorkflowCronsEvent(id: ID!): Boolean!
  }
`;

export const WorkflowCronsEventGqlResolvers = {
  Query: {
    getWorkflowCronsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
