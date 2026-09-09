export const WorkflowExecutionsSessionGqlTypeDefs = `
  type WorkflowExecutionsSession {
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
    getWorkflowExecutionsSession(id: ID!): WorkflowExecutionsSession
    listWorkflowExecutionsSessions(tenantId: String!, limit: Int): [WorkflowExecutionsSession!]!
  }

  extend type Mutation {
    createWorkflowExecutionsSession(tenantId: String!, code: String!, name: String!): WorkflowExecutionsSession!
    deleteWorkflowExecutionsSession(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsSessionGqlResolvers = {
  Query: {
    getWorkflowExecutionsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
