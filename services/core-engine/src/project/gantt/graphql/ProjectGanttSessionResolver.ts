export const ProjectGanttSessionGqlTypeDefs = `
  type ProjectGanttSession {
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
    getProjectGanttSession(id: ID!): ProjectGanttSession
    listProjectGanttSessions(tenantId: String!, limit: Int): [ProjectGanttSession!]!
  }

  extend type Mutation {
    createProjectGanttSession(tenantId: String!, code: String!, name: String!): ProjectGanttSession!
    deleteProjectGanttSession(id: ID!): Boolean!
  }
`;

export const ProjectGanttSessionGqlResolvers = {
  Query: {
    getProjectGanttSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
