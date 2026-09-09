export const ProjectKanbanNodeGqlTypeDefs = `
  type ProjectKanbanNode {
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
    getProjectKanbanNode(id: ID!): ProjectKanbanNode
    listProjectKanbanNodes(tenantId: String!, limit: Int): [ProjectKanbanNode!]!
  }

  extend type Mutation {
    createProjectKanbanNode(tenantId: String!, code: String!, name: String!): ProjectKanbanNode!
    deleteProjectKanbanNode(id: ID!): Boolean!
  }
`;

export const ProjectKanbanNodeGqlResolvers = {
  Query: {
    getProjectKanbanNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
