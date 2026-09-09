export const ProjectGanttAssignmentGqlTypeDefs = `
  type ProjectGanttAssignment {
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
    getProjectGanttAssignment(id: ID!): ProjectGanttAssignment
    listProjectGanttAssignments(tenantId: String!, limit: Int): [ProjectGanttAssignment!]!
  }

  extend type Mutation {
    createProjectGanttAssignment(tenantId: String!, code: String!, name: String!): ProjectGanttAssignment!
    deleteProjectGanttAssignment(id: ID!): Boolean!
  }
`;

export const ProjectGanttAssignmentGqlResolvers = {
  Query: {
    getProjectGanttAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
