export const WorkflowDagConfigGqlTypeDefs = `
  type WorkflowDagConfig {
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
    getWorkflowDagConfig(id: ID!): WorkflowDagConfig
    listWorkflowDagConfigs(tenantId: String!, limit: Int): [WorkflowDagConfig!]!
  }

  extend type Mutation {
    createWorkflowDagConfig(tenantId: String!, code: String!, name: String!): WorkflowDagConfig!
    deleteWorkflowDagConfig(id: ID!): Boolean!
  }
`;

export const WorkflowDagConfigGqlResolvers = {
  Query: {
    getWorkflowDagConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
