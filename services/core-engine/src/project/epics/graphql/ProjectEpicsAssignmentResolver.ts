export const ProjectEpicsAssignmentGqlTypeDefs = `
  type ProjectEpicsAssignment {
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
    getProjectEpicsAssignment(id: ID!): ProjectEpicsAssignment
    listProjectEpicsAssignments(tenantId: String!, limit: Int): [ProjectEpicsAssignment!]!
  }

  extend type Mutation {
    createProjectEpicsAssignment(tenantId: String!, code: String!, name: String!): ProjectEpicsAssignment!
    deleteProjectEpicsAssignment(id: ID!): Boolean!
  }
`;

export const ProjectEpicsAssignmentGqlResolvers = {
  Query: {
    getProjectEpicsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
