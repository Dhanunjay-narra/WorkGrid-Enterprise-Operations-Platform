export const CommCallsAssignmentGqlTypeDefs = `
  type CommCallsAssignment {
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
    getCommCallsAssignment(id: ID!): CommCallsAssignment
    listCommCallsAssignments(tenantId: String!, limit: Int): [CommCallsAssignment!]!
  }

  extend type Mutation {
    createCommCallsAssignment(tenantId: String!, code: String!, name: String!): CommCallsAssignment!
    deleteCommCallsAssignment(id: ID!): Boolean!
  }
`;

export const CommCallsAssignmentGqlResolvers = {
  Query: {
    getCommCallsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
