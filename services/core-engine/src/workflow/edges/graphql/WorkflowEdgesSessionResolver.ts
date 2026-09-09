export const WorkflowEdgesSessionGqlTypeDefs = `
  type WorkflowEdgesSession {
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
    getWorkflowEdgesSession(id: ID!): WorkflowEdgesSession
    listWorkflowEdgesSessions(tenantId: String!, limit: Int): [WorkflowEdgesSession!]!
  }

  extend type Mutation {
    createWorkflowEdgesSession(tenantId: String!, code: String!, name: String!): WorkflowEdgesSession!
    deleteWorkflowEdgesSession(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesSessionGqlResolvers = {
  Query: {
    getWorkflowEdgesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
