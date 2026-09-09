export const ProjectCapacityAssignmentGqlTypeDefs = `
  type ProjectCapacityAssignment {
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
    getProjectCapacityAssignment(id: ID!): ProjectCapacityAssignment
    listProjectCapacityAssignments(tenantId: String!, limit: Int): [ProjectCapacityAssignment!]!
  }

  extend type Mutation {
    createProjectCapacityAssignment(tenantId: String!, code: String!, name: String!): ProjectCapacityAssignment!
    deleteProjectCapacityAssignment(id: ID!): Boolean!
  }
`;

export const ProjectCapacityAssignmentGqlResolvers = {
  Query: {
    getProjectCapacityAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
