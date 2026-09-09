export const ProjectTasksAssignmentGqlTypeDefs = `
  type ProjectTasksAssignment {
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
    getProjectTasksAssignment(id: ID!): ProjectTasksAssignment
    listProjectTasksAssignments(tenantId: String!, limit: Int): [ProjectTasksAssignment!]!
  }

  extend type Mutation {
    createProjectTasksAssignment(tenantId: String!, code: String!, name: String!): ProjectTasksAssignment!
    deleteProjectTasksAssignment(id: ID!): Boolean!
  }
`;

export const ProjectTasksAssignmentGqlResolvers = {
  Query: {
    getProjectTasksAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
