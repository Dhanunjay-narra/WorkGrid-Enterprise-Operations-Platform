export const ProjectKanbanMappingGqlTypeDefs = `
  type ProjectKanbanMapping {
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
    getProjectKanbanMapping(id: ID!): ProjectKanbanMapping
    listProjectKanbanMappings(tenantId: String!, limit: Int): [ProjectKanbanMapping!]!
  }

  extend type Mutation {
    createProjectKanbanMapping(tenantId: String!, code: String!, name: String!): ProjectKanbanMapping!
    deleteProjectKanbanMapping(id: ID!): Boolean!
  }
`;

export const ProjectKanbanMappingGqlResolvers = {
  Query: {
    getProjectKanbanMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
