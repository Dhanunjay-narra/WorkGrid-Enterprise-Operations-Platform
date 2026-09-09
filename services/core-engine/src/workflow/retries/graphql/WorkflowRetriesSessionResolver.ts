export const WorkflowRetriesSessionGqlTypeDefs = `
  type WorkflowRetriesSession {
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
    getWorkflowRetriesSession(id: ID!): WorkflowRetriesSession
    listWorkflowRetriesSessions(tenantId: String!, limit: Int): [WorkflowRetriesSession!]!
  }

  extend type Mutation {
    createWorkflowRetriesSession(tenantId: String!, code: String!, name: String!): WorkflowRetriesSession!
    deleteWorkflowRetriesSession(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesSessionGqlResolvers = {
  Query: {
    getWorkflowRetriesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
