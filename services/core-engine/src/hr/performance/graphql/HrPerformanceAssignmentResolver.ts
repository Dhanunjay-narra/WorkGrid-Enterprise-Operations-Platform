export const HrPerformanceAssignmentGqlTypeDefs = `
  type HrPerformanceAssignment {
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
    getHrPerformanceAssignment(id: ID!): HrPerformanceAssignment
    listHrPerformanceAssignments(tenantId: String!, limit: Int): [HrPerformanceAssignment!]!
  }

  extend type Mutation {
    createHrPerformanceAssignment(tenantId: String!, code: String!, name: String!): HrPerformanceAssignment!
    deleteHrPerformanceAssignment(id: ID!): Boolean!
  }
`;

export const HrPerformanceAssignmentGqlResolvers = {
  Query: {
    getHrPerformanceAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
