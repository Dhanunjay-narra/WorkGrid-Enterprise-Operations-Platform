export const ProjectKanbanProfileGqlTypeDefs = `
  type ProjectKanbanProfile {
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
    getProjectKanbanProfile(id: ID!): ProjectKanbanProfile
    listProjectKanbanProfiles(tenantId: String!, limit: Int): [ProjectKanbanProfile!]!
  }

  extend type Mutation {
    createProjectKanbanProfile(tenantId: String!, code: String!, name: String!): ProjectKanbanProfile!
    deleteProjectKanbanProfile(id: ID!): Boolean!
  }
`;

export const ProjectKanbanProfileGqlResolvers = {
  Query: {
    getProjectKanbanProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
