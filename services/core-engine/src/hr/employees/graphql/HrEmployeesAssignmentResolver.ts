export const HrEmployeesAssignmentGqlTypeDefs = `
  type HrEmployeesAssignment {
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
    getHrEmployeesAssignment(id: ID!): HrEmployeesAssignment
    listHrEmployeesAssignments(tenantId: String!, limit: Int): [HrEmployeesAssignment!]!
  }

  extend type Mutation {
    createHrEmployeesAssignment(tenantId: String!, code: String!, name: String!): HrEmployeesAssignment!
    deleteHrEmployeesAssignment(id: ID!): Boolean!
  }
`;

export const HrEmployeesAssignmentGqlResolvers = {
  Query: {
    getHrEmployeesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
