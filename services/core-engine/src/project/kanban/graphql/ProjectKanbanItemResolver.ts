export const ProjectKanbanItemGqlTypeDefs = `
  type ProjectKanbanItem {
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
    getProjectKanbanItem(id: ID!): ProjectKanbanItem
    listProjectKanbanItems(tenantId: String!, limit: Int): [ProjectKanbanItem!]!
  }

  extend type Mutation {
    createProjectKanbanItem(tenantId: String!, code: String!, name: String!): ProjectKanbanItem!
    deleteProjectKanbanItem(id: ID!): Boolean!
  }
`;

export const ProjectKanbanItemGqlResolvers = {
  Query: {
    getProjectKanbanItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
