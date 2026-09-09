export const WorkflowRetriesThresholdGqlTypeDefs = `
  type WorkflowRetriesThreshold {
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
    getWorkflowRetriesThreshold(id: ID!): WorkflowRetriesThreshold
    listWorkflowRetriesThresholds(tenantId: String!, limit: Int): [WorkflowRetriesThreshold!]!
  }

  extend type Mutation {
    createWorkflowRetriesThreshold(tenantId: String!, code: String!, name: String!): WorkflowRetriesThreshold!
    deleteWorkflowRetriesThreshold(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesThresholdGqlResolvers = {
  Query: {
    getWorkflowRetriesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
