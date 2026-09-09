export const ProjectEpicsSessionGqlTypeDefs = `
  type ProjectEpicsSession {
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
    getProjectEpicsSession(id: ID!): ProjectEpicsSession
    listProjectEpicsSessions(tenantId: String!, limit: Int): [ProjectEpicsSession!]!
  }

  extend type Mutation {
    createProjectEpicsSession(tenantId: String!, code: String!, name: String!): ProjectEpicsSession!
    deleteProjectEpicsSession(id: ID!): Boolean!
  }
`;

export const ProjectEpicsSessionGqlResolvers = {
  Query: {
    getProjectEpicsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
