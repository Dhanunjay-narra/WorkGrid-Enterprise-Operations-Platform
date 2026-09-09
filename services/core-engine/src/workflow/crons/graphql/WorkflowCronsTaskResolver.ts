export const WorkflowCronsTaskGqlTypeDefs = `
  type WorkflowCronsTask {
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
    getWorkflowCronsTask(id: ID!): WorkflowCronsTask
    listWorkflowCronsTasks(tenantId: String!, limit: Int): [WorkflowCronsTask!]!
  }

  extend type Mutation {
    createWorkflowCronsTask(tenantId: String!, code: String!, name: String!): WorkflowCronsTask!
    deleteWorkflowCronsTask(id: ID!): Boolean!
  }
`;

export const WorkflowCronsTaskGqlResolvers = {
  Query: {
    getWorkflowCronsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
