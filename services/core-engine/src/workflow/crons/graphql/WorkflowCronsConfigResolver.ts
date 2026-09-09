export const WorkflowCronsConfigGqlTypeDefs = `
  type WorkflowCronsConfig {
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
    getWorkflowCronsConfig(id: ID!): WorkflowCronsConfig
    listWorkflowCronsConfigs(tenantId: String!, limit: Int): [WorkflowCronsConfig!]!
  }

  extend type Mutation {
    createWorkflowCronsConfig(tenantId: String!, code: String!, name: String!): WorkflowCronsConfig!
    deleteWorkflowCronsConfig(id: ID!): Boolean!
  }
`;

export const WorkflowCronsConfigGqlResolvers = {
  Query: {
    getWorkflowCronsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
