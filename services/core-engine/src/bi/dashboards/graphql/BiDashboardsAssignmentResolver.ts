export const BiDashboardsAssignmentGqlTypeDefs = `
  type BiDashboardsAssignment {
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
    getBiDashboardsAssignment(id: ID!): BiDashboardsAssignment
    listBiDashboardsAssignments(tenantId: String!, limit: Int): [BiDashboardsAssignment!]!
  }

  extend type Mutation {
    createBiDashboardsAssignment(tenantId: String!, code: String!, name: String!): BiDashboardsAssignment!
    deleteBiDashboardsAssignment(id: ID!): Boolean!
  }
`;

export const BiDashboardsAssignmentGqlResolvers = {
  Query: {
    getBiDashboardsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
