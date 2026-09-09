export const WorkflowNodesSessionGqlTypeDefs = `
  type WorkflowNodesSession {
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
    getWorkflowNodesSession(id: ID!): WorkflowNodesSession
    listWorkflowNodesSessions(tenantId: String!, limit: Int): [WorkflowNodesSession!]!
  }

  extend type Mutation {
    createWorkflowNodesSession(tenantId: String!, code: String!, name: String!): WorkflowNodesSession!
    deleteWorkflowNodesSession(id: ID!): Boolean!
  }
`;

export const WorkflowNodesSessionGqlResolvers = {
  Query: {
    getWorkflowNodesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
