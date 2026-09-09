export const BiQueriesAssignmentGqlTypeDefs = `
  type BiQueriesAssignment {
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
    getBiQueriesAssignment(id: ID!): BiQueriesAssignment
    listBiQueriesAssignments(tenantId: String!, limit: Int): [BiQueriesAssignment!]!
  }

  extend type Mutation {
    createBiQueriesAssignment(tenantId: String!, code: String!, name: String!): BiQueriesAssignment!
    deleteBiQueriesAssignment(id: ID!): Boolean!
  }
`;

export const BiQueriesAssignmentGqlResolvers = {
  Query: {
    getBiQueriesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
