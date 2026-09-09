export const ProjectWorkspacesProfileGqlTypeDefs = `
  type ProjectWorkspacesProfile {
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
    getProjectWorkspacesProfile(id: ID!): ProjectWorkspacesProfile
    listProjectWorkspacesProfiles(tenantId: String!, limit: Int): [ProjectWorkspacesProfile!]!
  }

  extend type Mutation {
    createProjectWorkspacesProfile(tenantId: String!, code: String!, name: String!): ProjectWorkspacesProfile!
    deleteProjectWorkspacesProfile(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesProfileGqlResolvers = {
  Query: {
    getProjectWorkspacesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
