export const ProjectWorkspacesPolicyGqlTypeDefs = `
  type ProjectWorkspacesPolicy {
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
    getProjectWorkspacesPolicy(id: ID!): ProjectWorkspacesPolicy
    listProjectWorkspacesPolicys(tenantId: String!, limit: Int): [ProjectWorkspacesPolicy!]!
  }

  extend type Mutation {
    createProjectWorkspacesPolicy(tenantId: String!, code: String!, name: String!): ProjectWorkspacesPolicy!
    deleteProjectWorkspacesPolicy(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesPolicyGqlResolvers = {
  Query: {
    getProjectWorkspacesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
