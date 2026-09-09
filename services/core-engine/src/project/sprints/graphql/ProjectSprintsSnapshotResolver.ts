export const ProjectSprintsSnapshotGqlTypeDefs = `
  type ProjectSprintsSnapshot {
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
    getProjectSprintsSnapshot(id: ID!): ProjectSprintsSnapshot
    listProjectSprintsSnapshots(tenantId: String!, limit: Int): [ProjectSprintsSnapshot!]!
  }

  extend type Mutation {
    createProjectSprintsSnapshot(tenantId: String!, code: String!, name: String!): ProjectSprintsSnapshot!
    deleteProjectSprintsSnapshot(id: ID!): Boolean!
  }
`;

export const ProjectSprintsSnapshotGqlResolvers = {
  Query: {
    getProjectSprintsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
