export const CommThreadsAssignmentGqlTypeDefs = `
  type CommThreadsAssignment {
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
    getCommThreadsAssignment(id: ID!): CommThreadsAssignment
    listCommThreadsAssignments(tenantId: String!, limit: Int): [CommThreadsAssignment!]!
  }

  extend type Mutation {
    createCommThreadsAssignment(tenantId: String!, code: String!, name: String!): CommThreadsAssignment!
    deleteCommThreadsAssignment(id: ID!): Boolean!
  }
`;

export const CommThreadsAssignmentGqlResolvers = {
  Query: {
    getCommThreadsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
