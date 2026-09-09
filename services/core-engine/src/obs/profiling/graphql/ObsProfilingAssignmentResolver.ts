export const ObsProfilingAssignmentGqlTypeDefs = `
  type ObsProfilingAssignment {
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
    getObsProfilingAssignment(id: ID!): ObsProfilingAssignment
    listObsProfilingAssignments(tenantId: String!, limit: Int): [ObsProfilingAssignment!]!
  }

  extend type Mutation {
    createObsProfilingAssignment(tenantId: String!, code: String!, name: String!): ObsProfilingAssignment!
    deleteObsProfilingAssignment(id: ID!): Boolean!
  }
`;

export const ObsProfilingAssignmentGqlResolvers = {
  Query: {
    getObsProfilingAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
