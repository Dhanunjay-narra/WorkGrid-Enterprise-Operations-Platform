export const WorkflowNodesConfigGqlTypeDefs = `
  type WorkflowNodesConfig {
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
    getWorkflowNodesConfig(id: ID!): WorkflowNodesConfig
    listWorkflowNodesConfigs(tenantId: String!, limit: Int): [WorkflowNodesConfig!]!
  }

  extend type Mutation {
    createWorkflowNodesConfig(tenantId: String!, code: String!, name: String!): WorkflowNodesConfig!
    deleteWorkflowNodesConfig(id: ID!): Boolean!
  }
`;

export const WorkflowNodesConfigGqlResolvers = {
  Query: {
    getWorkflowNodesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
