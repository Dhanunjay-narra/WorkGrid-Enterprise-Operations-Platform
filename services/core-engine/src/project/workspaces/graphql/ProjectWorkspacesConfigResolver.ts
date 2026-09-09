export const ProjectWorkspacesConfigGqlTypeDefs = `
  type ProjectWorkspacesConfig {
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
    getProjectWorkspacesConfig(id: ID!): ProjectWorkspacesConfig
    listProjectWorkspacesConfigs(tenantId: String!, limit: Int): [ProjectWorkspacesConfig!]!
  }

  extend type Mutation {
    createProjectWorkspacesConfig(tenantId: String!, code: String!, name: String!): ProjectWorkspacesConfig!
    deleteProjectWorkspacesConfig(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesConfigGqlResolvers = {
  Query: {
    getProjectWorkspacesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
