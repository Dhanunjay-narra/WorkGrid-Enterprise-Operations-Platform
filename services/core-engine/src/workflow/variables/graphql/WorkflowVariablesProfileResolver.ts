export const WorkflowVariablesProfileGqlTypeDefs = `
  type WorkflowVariablesProfile {
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
    getWorkflowVariablesProfile(id: ID!): WorkflowVariablesProfile
    listWorkflowVariablesProfiles(tenantId: String!, limit: Int): [WorkflowVariablesProfile!]!
  }

  extend type Mutation {
    createWorkflowVariablesProfile(tenantId: String!, code: String!, name: String!): WorkflowVariablesProfile!
    deleteWorkflowVariablesProfile(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesProfileGqlResolvers = {
  Query: {
    getWorkflowVariablesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
