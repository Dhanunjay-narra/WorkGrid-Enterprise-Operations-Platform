export const IntRateLimitsAssignmentGqlTypeDefs = `
  type IntRateLimitsAssignment {
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
    getIntRateLimitsAssignment(id: ID!): IntRateLimitsAssignment
    listIntRateLimitsAssignments(tenantId: String!, limit: Int): [IntRateLimitsAssignment!]!
  }

  extend type Mutation {
    createIntRateLimitsAssignment(tenantId: String!, code: String!, name: String!): IntRateLimitsAssignment!
    deleteIntRateLimitsAssignment(id: ID!): Boolean!
  }
`;

export const IntRateLimitsAssignmentGqlResolvers = {
  Query: {
    getIntRateLimitsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
