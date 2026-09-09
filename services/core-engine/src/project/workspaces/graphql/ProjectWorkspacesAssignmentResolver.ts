export const ProjectWorkspacesAssignmentGqlTypeDefs = `
  type ProjectWorkspacesAssignment {
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
    getProjectWorkspacesAssignment(id: ID!): ProjectWorkspacesAssignment
    listProjectWorkspacesAssignments(tenantId: String!, limit: Int): [ProjectWorkspacesAssignment!]!
  }

  extend type Mutation {
    createProjectWorkspacesAssignment(tenantId: String!, code: String!, name: String!): ProjectWorkspacesAssignment!
    deleteProjectWorkspacesAssignment(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesAssignmentGqlResolvers = {
  Query: {
    getProjectWorkspacesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
