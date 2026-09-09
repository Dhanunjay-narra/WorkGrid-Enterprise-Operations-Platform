export const ProjectSprintsAssignmentGqlTypeDefs = `
  type ProjectSprintsAssignment {
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
    getProjectSprintsAssignment(id: ID!): ProjectSprintsAssignment
    listProjectSprintsAssignments(tenantId: String!, limit: Int): [ProjectSprintsAssignment!]!
  }

  extend type Mutation {
    createProjectSprintsAssignment(tenantId: String!, code: String!, name: String!): ProjectSprintsAssignment!
    deleteProjectSprintsAssignment(id: ID!): Boolean!
  }
`;

export const ProjectSprintsAssignmentGqlResolvers = {
  Query: {
    getProjectSprintsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
