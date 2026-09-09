export const BiAnomaliesAssignmentGqlTypeDefs = `
  type BiAnomaliesAssignment {
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
    getBiAnomaliesAssignment(id: ID!): BiAnomaliesAssignment
    listBiAnomaliesAssignments(tenantId: String!, limit: Int): [BiAnomaliesAssignment!]!
  }

  extend type Mutation {
    createBiAnomaliesAssignment(tenantId: String!, code: String!, name: String!): BiAnomaliesAssignment!
    deleteBiAnomaliesAssignment(id: ID!): Boolean!
  }
`;

export const BiAnomaliesAssignmentGqlResolvers = {
  Query: {
    getBiAnomaliesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
