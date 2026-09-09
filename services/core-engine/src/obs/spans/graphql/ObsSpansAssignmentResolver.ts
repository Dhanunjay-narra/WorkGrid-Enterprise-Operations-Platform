export const ObsSpansAssignmentGqlTypeDefs = `
  type ObsSpansAssignment {
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
    getObsSpansAssignment(id: ID!): ObsSpansAssignment
    listObsSpansAssignments(tenantId: String!, limit: Int): [ObsSpansAssignment!]!
  }

  extend type Mutation {
    createObsSpansAssignment(tenantId: String!, code: String!, name: String!): ObsSpansAssignment!
    deleteObsSpansAssignment(id: ID!): Boolean!
  }
`;

export const ObsSpansAssignmentGqlResolvers = {
  Query: {
    getObsSpansAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
