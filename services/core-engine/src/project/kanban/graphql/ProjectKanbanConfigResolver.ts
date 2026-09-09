export const ProjectKanbanConfigGqlTypeDefs = `
  type ProjectKanbanConfig {
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
    getProjectKanbanConfig(id: ID!): ProjectKanbanConfig
    listProjectKanbanConfigs(tenantId: String!, limit: Int): [ProjectKanbanConfig!]!
  }

  extend type Mutation {
    createProjectKanbanConfig(tenantId: String!, code: String!, name: String!): ProjectKanbanConfig!
    deleteProjectKanbanConfig(id: ID!): Boolean!
  }
`;

export const ProjectKanbanConfigGqlResolvers = {
  Query: {
    getProjectKanbanConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
