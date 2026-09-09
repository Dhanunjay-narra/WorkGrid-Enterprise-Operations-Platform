export const WorkflowDagSessionGqlTypeDefs = `
  type WorkflowDagSession {
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
    getWorkflowDagSession(id: ID!): WorkflowDagSession
    listWorkflowDagSessions(tenantId: String!, limit: Int): [WorkflowDagSession!]!
  }

  extend type Mutation {
    createWorkflowDagSession(tenantId: String!, code: String!, name: String!): WorkflowDagSession!
    deleteWorkflowDagSession(id: ID!): Boolean!
  }
`;

export const WorkflowDagSessionGqlResolvers = {
  Query: {
    getWorkflowDagSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
