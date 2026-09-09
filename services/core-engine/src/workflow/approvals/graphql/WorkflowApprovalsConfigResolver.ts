export const WorkflowApprovalsConfigGqlTypeDefs = `
  type WorkflowApprovalsConfig {
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
    getWorkflowApprovalsConfig(id: ID!): WorkflowApprovalsConfig
    listWorkflowApprovalsConfigs(tenantId: String!, limit: Int): [WorkflowApprovalsConfig!]!
  }

  extend type Mutation {
    createWorkflowApprovalsConfig(tenantId: String!, code: String!, name: String!): WorkflowApprovalsConfig!
    deleteWorkflowApprovalsConfig(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsConfigGqlResolvers = {
  Query: {
    getWorkflowApprovalsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
