export const WorkflowEdgesConfigGqlTypeDefs = `
  type WorkflowEdgesConfig {
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
    getWorkflowEdgesConfig(id: ID!): WorkflowEdgesConfig
    listWorkflowEdgesConfigs(tenantId: String!, limit: Int): [WorkflowEdgesConfig!]!
  }

  extend type Mutation {
    createWorkflowEdgesConfig(tenantId: String!, code: String!, name: String!): WorkflowEdgesConfig!
    deleteWorkflowEdgesConfig(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesConfigGqlResolvers = {
  Query: {
    getWorkflowEdgesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
