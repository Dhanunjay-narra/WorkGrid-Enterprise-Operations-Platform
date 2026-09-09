export const WorkflowRetriesTaskGqlTypeDefs = `
  type WorkflowRetriesTask {
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
    getWorkflowRetriesTask(id: ID!): WorkflowRetriesTask
    listWorkflowRetriesTasks(tenantId: String!, limit: Int): [WorkflowRetriesTask!]!
  }

  extend type Mutation {
    createWorkflowRetriesTask(tenantId: String!, code: String!, name: String!): WorkflowRetriesTask!
    deleteWorkflowRetriesTask(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesTaskGqlResolvers = {
  Query: {
    getWorkflowRetriesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
