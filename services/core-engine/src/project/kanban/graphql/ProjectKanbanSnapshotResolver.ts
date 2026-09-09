export const ProjectKanbanSnapshotGqlTypeDefs = `
  type ProjectKanbanSnapshot {
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
    getProjectKanbanSnapshot(id: ID!): ProjectKanbanSnapshot
    listProjectKanbanSnapshots(tenantId: String!, limit: Int): [ProjectKanbanSnapshot!]!
  }

  extend type Mutation {
    createProjectKanbanSnapshot(tenantId: String!, code: String!, name: String!): ProjectKanbanSnapshot!
    deleteProjectKanbanSnapshot(id: ID!): Boolean!
  }
`;

export const ProjectKanbanSnapshotGqlResolvers = {
  Query: {
    getProjectKanbanSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
