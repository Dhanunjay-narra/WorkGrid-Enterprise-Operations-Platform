export const ObsLoggingAssignmentGqlTypeDefs = `
  type ObsLoggingAssignment {
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
    getObsLoggingAssignment(id: ID!): ObsLoggingAssignment
    listObsLoggingAssignments(tenantId: String!, limit: Int): [ObsLoggingAssignment!]!
  }

  extend type Mutation {
    createObsLoggingAssignment(tenantId: String!, code: String!, name: String!): ObsLoggingAssignment!
    deleteObsLoggingAssignment(id: ID!): Boolean!
  }
`;

export const ObsLoggingAssignmentGqlResolvers = {
  Query: {
    getObsLoggingAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
