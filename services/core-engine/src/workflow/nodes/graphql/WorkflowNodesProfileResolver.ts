export const WorkflowNodesProfileGqlTypeDefs = `
  type WorkflowNodesProfile {
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
    getWorkflowNodesProfile(id: ID!): WorkflowNodesProfile
    listWorkflowNodesProfiles(tenantId: String!, limit: Int): [WorkflowNodesProfile!]!
  }

  extend type Mutation {
    createWorkflowNodesProfile(tenantId: String!, code: String!, name: String!): WorkflowNodesProfile!
    deleteWorkflowNodesProfile(id: ID!): Boolean!
  }
`;

export const WorkflowNodesProfileGqlResolvers = {
  Query: {
    getWorkflowNodesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
