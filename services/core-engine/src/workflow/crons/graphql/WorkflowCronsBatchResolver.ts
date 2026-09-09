export const WorkflowCronsBatchGqlTypeDefs = `
  type WorkflowCronsBatch {
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
    getWorkflowCronsBatch(id: ID!): WorkflowCronsBatch
    listWorkflowCronsBatchs(tenantId: String!, limit: Int): [WorkflowCronsBatch!]!
  }

  extend type Mutation {
    createWorkflowCronsBatch(tenantId: String!, code: String!, name: String!): WorkflowCronsBatch!
    deleteWorkflowCronsBatch(id: ID!): Boolean!
  }
`;

export const WorkflowCronsBatchGqlResolvers = {
  Query: {
    getWorkflowCronsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
