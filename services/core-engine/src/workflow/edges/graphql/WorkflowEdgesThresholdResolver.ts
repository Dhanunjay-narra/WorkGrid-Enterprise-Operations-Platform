export const WorkflowEdgesThresholdGqlTypeDefs = `
  type WorkflowEdgesThreshold {
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
    getWorkflowEdgesThreshold(id: ID!): WorkflowEdgesThreshold
    listWorkflowEdgesThresholds(tenantId: String!, limit: Int): [WorkflowEdgesThreshold!]!
  }

  extend type Mutation {
    createWorkflowEdgesThreshold(tenantId: String!, code: String!, name: String!): WorkflowEdgesThreshold!
    deleteWorkflowEdgesThreshold(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesThresholdGqlResolvers = {
  Query: {
    getWorkflowEdgesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
