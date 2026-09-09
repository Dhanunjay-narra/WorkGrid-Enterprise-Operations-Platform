export const ProjectWorkspacesSessionGqlTypeDefs = `
  type ProjectWorkspacesSession {
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
    getProjectWorkspacesSession(id: ID!): ProjectWorkspacesSession
    listProjectWorkspacesSessions(tenantId: String!, limit: Int): [ProjectWorkspacesSession!]!
  }

  extend type Mutation {
    createProjectWorkspacesSession(tenantId: String!, code: String!, name: String!): ProjectWorkspacesSession!
    deleteProjectWorkspacesSession(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesSessionGqlResolvers = {
  Query: {
    getProjectWorkspacesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
