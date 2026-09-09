export const ProjectGanttSnapshotGqlTypeDefs = `
  type ProjectGanttSnapshot {
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
    getProjectGanttSnapshot(id: ID!): ProjectGanttSnapshot
    listProjectGanttSnapshots(tenantId: String!, limit: Int): [ProjectGanttSnapshot!]!
  }

  extend type Mutation {
    createProjectGanttSnapshot(tenantId: String!, code: String!, name: String!): ProjectGanttSnapshot!
    deleteProjectGanttSnapshot(id: ID!): Boolean!
  }
`;

export const ProjectGanttSnapshotGqlResolvers = {
  Query: {
    getProjectGanttSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
