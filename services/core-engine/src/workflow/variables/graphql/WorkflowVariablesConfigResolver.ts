export const WorkflowVariablesConfigGqlTypeDefs = `
  type WorkflowVariablesConfig {
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
    getWorkflowVariablesConfig(id: ID!): WorkflowVariablesConfig
    listWorkflowVariablesConfigs(tenantId: String!, limit: Int): [WorkflowVariablesConfig!]!
  }

  extend type Mutation {
    createWorkflowVariablesConfig(tenantId: String!, code: String!, name: String!): WorkflowVariablesConfig!
    deleteWorkflowVariablesConfig(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesConfigGqlResolvers = {
  Query: {
    getWorkflowVariablesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
