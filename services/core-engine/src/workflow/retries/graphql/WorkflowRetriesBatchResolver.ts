export const WorkflowRetriesBatchGqlTypeDefs = `
  type WorkflowRetriesBatch {
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
    getWorkflowRetriesBatch(id: ID!): WorkflowRetriesBatch
    listWorkflowRetriesBatchs(tenantId: String!, limit: Int): [WorkflowRetriesBatch!]!
  }

  extend type Mutation {
    createWorkflowRetriesBatch(tenantId: String!, code: String!, name: String!): WorkflowRetriesBatch!
    deleteWorkflowRetriesBatch(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesBatchGqlResolvers = {
  Query: {
    getWorkflowRetriesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
