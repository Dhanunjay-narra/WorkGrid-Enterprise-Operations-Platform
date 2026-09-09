export const WorkflowRetriesConfigGqlTypeDefs = `
  type WorkflowRetriesConfig {
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
    getWorkflowRetriesConfig(id: ID!): WorkflowRetriesConfig
    listWorkflowRetriesConfigs(tenantId: String!, limit: Int): [WorkflowRetriesConfig!]!
  }

  extend type Mutation {
    createWorkflowRetriesConfig(tenantId: String!, code: String!, name: String!): WorkflowRetriesConfig!
    deleteWorkflowRetriesConfig(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesConfigGqlResolvers = {
  Query: {
    getWorkflowRetriesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
