export const ProjectWorkspacesMappingGqlTypeDefs = `
  type ProjectWorkspacesMapping {
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
    getProjectWorkspacesMapping(id: ID!): ProjectWorkspacesMapping
    listProjectWorkspacesMappings(tenantId: String!, limit: Int): [ProjectWorkspacesMapping!]!
  }

  extend type Mutation {
    createProjectWorkspacesMapping(tenantId: String!, code: String!, name: String!): ProjectWorkspacesMapping!
    deleteProjectWorkspacesMapping(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesMappingGqlResolvers = {
  Query: {
    getProjectWorkspacesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
