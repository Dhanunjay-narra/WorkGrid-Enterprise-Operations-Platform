export const WorkflowNodesThresholdGqlTypeDefs = `
  type WorkflowNodesThreshold {
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
    getWorkflowNodesThreshold(id: ID!): WorkflowNodesThreshold
    listWorkflowNodesThresholds(tenantId: String!, limit: Int): [WorkflowNodesThreshold!]!
  }

  extend type Mutation {
    createWorkflowNodesThreshold(tenantId: String!, code: String!, name: String!): WorkflowNodesThreshold!
    deleteWorkflowNodesThreshold(id: ID!): Boolean!
  }
`;

export const WorkflowNodesThresholdGqlResolvers = {
  Query: {
    getWorkflowNodesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
