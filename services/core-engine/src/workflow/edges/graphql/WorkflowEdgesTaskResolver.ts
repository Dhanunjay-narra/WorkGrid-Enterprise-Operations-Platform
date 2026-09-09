export const WorkflowEdgesTaskGqlTypeDefs = `
  type WorkflowEdgesTask {
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
    getWorkflowEdgesTask(id: ID!): WorkflowEdgesTask
    listWorkflowEdgesTasks(tenantId: String!, limit: Int): [WorkflowEdgesTask!]!
  }

  extend type Mutation {
    createWorkflowEdgesTask(tenantId: String!, code: String!, name: String!): WorkflowEdgesTask!
    deleteWorkflowEdgesTask(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesTaskGqlResolvers = {
  Query: {
    getWorkflowEdgesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
