export const WorkflowVariablesSessionGqlTypeDefs = `
  type WorkflowVariablesSession {
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
    getWorkflowVariablesSession(id: ID!): WorkflowVariablesSession
    listWorkflowVariablesSessions(tenantId: String!, limit: Int): [WorkflowVariablesSession!]!
  }

  extend type Mutation {
    createWorkflowVariablesSession(tenantId: String!, code: String!, name: String!): WorkflowVariablesSession!
    deleteWorkflowVariablesSession(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesSessionGqlResolvers = {
  Query: {
    getWorkflowVariablesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
