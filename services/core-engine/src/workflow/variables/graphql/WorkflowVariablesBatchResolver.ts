export const WorkflowVariablesBatchGqlTypeDefs = `
  type WorkflowVariablesBatch {
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
    getWorkflowVariablesBatch(id: ID!): WorkflowVariablesBatch
    listWorkflowVariablesBatchs(tenantId: String!, limit: Int): [WorkflowVariablesBatch!]!
  }

  extend type Mutation {
    createWorkflowVariablesBatch(tenantId: String!, code: String!, name: String!): WorkflowVariablesBatch!
    deleteWorkflowVariablesBatch(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesBatchGqlResolvers = {
  Query: {
    getWorkflowVariablesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
