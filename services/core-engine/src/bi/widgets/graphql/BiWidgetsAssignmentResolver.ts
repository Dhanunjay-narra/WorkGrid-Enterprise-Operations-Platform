export const BiWidgetsAssignmentGqlTypeDefs = `
  type BiWidgetsAssignment {
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
    getBiWidgetsAssignment(id: ID!): BiWidgetsAssignment
    listBiWidgetsAssignments(tenantId: String!, limit: Int): [BiWidgetsAssignment!]!
  }

  extend type Mutation {
    createBiWidgetsAssignment(tenantId: String!, code: String!, name: String!): BiWidgetsAssignment!
    deleteBiWidgetsAssignment(id: ID!): Boolean!
  }
`;

export const BiWidgetsAssignmentGqlResolvers = {
  Query: {
    getBiWidgetsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
