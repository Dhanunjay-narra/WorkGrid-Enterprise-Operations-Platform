export const ProjectWorkspacesTaskGqlTypeDefs = `
  type ProjectWorkspacesTask {
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
    getProjectWorkspacesTask(id: ID!): ProjectWorkspacesTask
    listProjectWorkspacesTasks(tenantId: String!, limit: Int): [ProjectWorkspacesTask!]!
  }

  extend type Mutation {
    createProjectWorkspacesTask(tenantId: String!, code: String!, name: String!): ProjectWorkspacesTask!
    deleteProjectWorkspacesTask(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesTaskGqlResolvers = {
  Query: {
    getProjectWorkspacesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
