export const WorkflowRetriesProfileGqlTypeDefs = `
  type WorkflowRetriesProfile {
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
    getWorkflowRetriesProfile(id: ID!): WorkflowRetriesProfile
    listWorkflowRetriesProfiles(tenantId: String!, limit: Int): [WorkflowRetriesProfile!]!
  }

  extend type Mutation {
    createWorkflowRetriesProfile(tenantId: String!, code: String!, name: String!): WorkflowRetriesProfile!
    deleteWorkflowRetriesProfile(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesProfileGqlResolvers = {
  Query: {
    getWorkflowRetriesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
