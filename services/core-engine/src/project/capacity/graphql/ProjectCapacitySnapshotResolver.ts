export const ProjectCapacitySnapshotGqlTypeDefs = `
  type ProjectCapacitySnapshot {
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
    getProjectCapacitySnapshot(id: ID!): ProjectCapacitySnapshot
    listProjectCapacitySnapshots(tenantId: String!, limit: Int): [ProjectCapacitySnapshot!]!
  }

  extend type Mutation {
    createProjectCapacitySnapshot(tenantId: String!, code: String!, name: String!): ProjectCapacitySnapshot!
    deleteProjectCapacitySnapshot(id: ID!): Boolean!
  }
`;

export const ProjectCapacitySnapshotGqlResolvers = {
  Query: {
    getProjectCapacitySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacitySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
