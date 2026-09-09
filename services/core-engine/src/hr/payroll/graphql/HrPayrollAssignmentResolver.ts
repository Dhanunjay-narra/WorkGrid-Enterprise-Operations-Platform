export const HrPayrollAssignmentGqlTypeDefs = `
  type HrPayrollAssignment {
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
    getHrPayrollAssignment(id: ID!): HrPayrollAssignment
    listHrPayrollAssignments(tenantId: String!, limit: Int): [HrPayrollAssignment!]!
  }

  extend type Mutation {
    createHrPayrollAssignment(tenantId: String!, code: String!, name: String!): HrPayrollAssignment!
    deleteHrPayrollAssignment(id: ID!): Boolean!
  }
`;

export const HrPayrollAssignmentGqlResolvers = {
  Query: {
    getHrPayrollAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
