export const ProjectTasksSnapshotGqlTypeDefs = `
  type ProjectTasksSnapshot {
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
    getProjectTasksSnapshot(id: ID!): ProjectTasksSnapshot
    listProjectTasksSnapshots(tenantId: String!, limit: Int): [ProjectTasksSnapshot!]!
  }

  extend type Mutation {
    createProjectTasksSnapshot(tenantId: String!, code: String!, name: String!): ProjectTasksSnapshot!
    deleteProjectTasksSnapshot(id: ID!): Boolean!
  }
`;

export const ProjectTasksSnapshotGqlResolvers = {
  Query: {
    getProjectTasksSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
