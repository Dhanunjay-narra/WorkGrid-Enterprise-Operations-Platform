export const WorkflowVariablesThresholdGqlTypeDefs = `
  type WorkflowVariablesThreshold {
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
    getWorkflowVariablesThreshold(id: ID!): WorkflowVariablesThreshold
    listWorkflowVariablesThresholds(tenantId: String!, limit: Int): [WorkflowVariablesThreshold!]!
  }

  extend type Mutation {
    createWorkflowVariablesThreshold(tenantId: String!, code: String!, name: String!): WorkflowVariablesThreshold!
    deleteWorkflowVariablesThreshold(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesThresholdGqlResolvers = {
  Query: {
    getWorkflowVariablesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
