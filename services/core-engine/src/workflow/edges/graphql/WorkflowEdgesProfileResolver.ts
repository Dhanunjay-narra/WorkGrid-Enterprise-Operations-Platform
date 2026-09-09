export const WorkflowEdgesProfileGqlTypeDefs = `
  type WorkflowEdgesProfile {
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
    getWorkflowEdgesProfile(id: ID!): WorkflowEdgesProfile
    listWorkflowEdgesProfiles(tenantId: String!, limit: Int): [WorkflowEdgesProfile!]!
  }

  extend type Mutation {
    createWorkflowEdgesProfile(tenantId: String!, code: String!, name: String!): WorkflowEdgesProfile!
    deleteWorkflowEdgesProfile(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesProfileGqlResolvers = {
  Query: {
    getWorkflowEdgesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
