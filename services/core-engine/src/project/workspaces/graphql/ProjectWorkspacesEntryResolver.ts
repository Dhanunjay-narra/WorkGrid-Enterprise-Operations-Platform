export const ProjectWorkspacesEntryGqlTypeDefs = `
  type ProjectWorkspacesEntry {
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
    getProjectWorkspacesEntry(id: ID!): ProjectWorkspacesEntry
    listProjectWorkspacesEntrys(tenantId: String!, limit: Int): [ProjectWorkspacesEntry!]!
  }

  extend type Mutation {
    createProjectWorkspacesEntry(tenantId: String!, code: String!, name: String!): ProjectWorkspacesEntry!
    deleteProjectWorkspacesEntry(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesEntryGqlResolvers = {
  Query: {
    getProjectWorkspacesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
