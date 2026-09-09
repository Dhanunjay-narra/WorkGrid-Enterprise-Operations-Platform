export const WorkflowEdgesBatchGqlTypeDefs = `
  type WorkflowEdgesBatch {
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
    getWorkflowEdgesBatch(id: ID!): WorkflowEdgesBatch
    listWorkflowEdgesBatchs(tenantId: String!, limit: Int): [WorkflowEdgesBatch!]!
  }

  extend type Mutation {
    createWorkflowEdgesBatch(tenantId: String!, code: String!, name: String!): WorkflowEdgesBatch!
    deleteWorkflowEdgesBatch(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesBatchGqlResolvers = {
  Query: {
    getWorkflowEdgesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
