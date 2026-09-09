export const BiCohortsAssignmentGqlTypeDefs = `
  type BiCohortsAssignment {
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
    getBiCohortsAssignment(id: ID!): BiCohortsAssignment
    listBiCohortsAssignments(tenantId: String!, limit: Int): [BiCohortsAssignment!]!
  }

  extend type Mutation {
    createBiCohortsAssignment(tenantId: String!, code: String!, name: String!): BiCohortsAssignment!
    deleteBiCohortsAssignment(id: ID!): Boolean!
  }
`;

export const BiCohortsAssignmentGqlResolvers = {
  Query: {
    getBiCohortsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
