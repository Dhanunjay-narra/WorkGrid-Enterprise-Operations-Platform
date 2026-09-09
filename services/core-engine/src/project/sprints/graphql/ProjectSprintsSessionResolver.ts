export const ProjectSprintsSessionGqlTypeDefs = `
  type ProjectSprintsSession {
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
    getProjectSprintsSession(id: ID!): ProjectSprintsSession
    listProjectSprintsSessions(tenantId: String!, limit: Int): [ProjectSprintsSession!]!
  }

  extend type Mutation {
    createProjectSprintsSession(tenantId: String!, code: String!, name: String!): ProjectSprintsSession!
    deleteProjectSprintsSession(id: ID!): Boolean!
  }
`;

export const ProjectSprintsSessionGqlResolvers = {
  Query: {
    getProjectSprintsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
