export const ProjectKanbanEntryGqlTypeDefs = `
  type ProjectKanbanEntry {
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
    getProjectKanbanEntry(id: ID!): ProjectKanbanEntry
    listProjectKanbanEntrys(tenantId: String!, limit: Int): [ProjectKanbanEntry!]!
  }

  extend type Mutation {
    createProjectKanbanEntry(tenantId: String!, code: String!, name: String!): ProjectKanbanEntry!
    deleteProjectKanbanEntry(id: ID!): Boolean!
  }
`;

export const ProjectKanbanEntryGqlResolvers = {
  Query: {
    getProjectKanbanEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
