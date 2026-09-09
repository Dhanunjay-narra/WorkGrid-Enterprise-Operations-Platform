export const ProjectKanbanSessionGqlTypeDefs = `
  type ProjectKanbanSession {
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
    getProjectKanbanSession(id: ID!): ProjectKanbanSession
    listProjectKanbanSessions(tenantId: String!, limit: Int): [ProjectKanbanSession!]!
  }

  extend type Mutation {
    createProjectKanbanSession(tenantId: String!, code: String!, name: String!): ProjectKanbanSession!
    deleteProjectKanbanSession(id: ID!): Boolean!
  }
`;

export const ProjectKanbanSessionGqlResolvers = {
  Query: {
    getProjectKanbanSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
