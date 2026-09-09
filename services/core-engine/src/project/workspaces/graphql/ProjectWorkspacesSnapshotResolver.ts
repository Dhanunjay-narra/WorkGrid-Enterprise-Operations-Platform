export const ProjectWorkspacesSnapshotGqlTypeDefs = `
  type ProjectWorkspacesSnapshot {
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
    getProjectWorkspacesSnapshot(id: ID!): ProjectWorkspacesSnapshot
    listProjectWorkspacesSnapshots(tenantId: String!, limit: Int): [ProjectWorkspacesSnapshot!]!
  }

  extend type Mutation {
    createProjectWorkspacesSnapshot(tenantId: String!, code: String!, name: String!): ProjectWorkspacesSnapshot!
    deleteProjectWorkspacesSnapshot(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesSnapshotGqlResolvers = {
  Query: {
    getProjectWorkspacesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
