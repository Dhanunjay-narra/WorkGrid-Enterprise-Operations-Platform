export const WorkflowDagProfileGqlTypeDefs = `
  type WorkflowDagProfile {
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
    getWorkflowDagProfile(id: ID!): WorkflowDagProfile
    listWorkflowDagProfiles(tenantId: String!, limit: Int): [WorkflowDagProfile!]!
  }

  extend type Mutation {
    createWorkflowDagProfile(tenantId: String!, code: String!, name: String!): WorkflowDagProfile!
    deleteWorkflowDagProfile(id: ID!): Boolean!
  }
`;

export const WorkflowDagProfileGqlResolvers = {
  Query: {
    getWorkflowDagProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
