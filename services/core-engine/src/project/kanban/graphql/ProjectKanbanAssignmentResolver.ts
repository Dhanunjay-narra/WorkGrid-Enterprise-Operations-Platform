export const ProjectKanbanAssignmentGqlTypeDefs = `
  type ProjectKanbanAssignment {
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
    getProjectKanbanAssignment(id: ID!): ProjectKanbanAssignment
    listProjectKanbanAssignments(tenantId: String!, limit: Int): [ProjectKanbanAssignment!]!
  }

  extend type Mutation {
    createProjectKanbanAssignment(tenantId: String!, code: String!, name: String!): ProjectKanbanAssignment!
    deleteProjectKanbanAssignment(id: ID!): Boolean!
  }
`;

export const ProjectKanbanAssignmentGqlResolvers = {
  Query: {
    getProjectKanbanAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
