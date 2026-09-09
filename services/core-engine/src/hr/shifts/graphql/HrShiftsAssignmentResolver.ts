export const HrShiftsAssignmentGqlTypeDefs = `
  type HrShiftsAssignment {
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
    getHrShiftsAssignment(id: ID!): HrShiftsAssignment
    listHrShiftsAssignments(tenantId: String!, limit: Int): [HrShiftsAssignment!]!
  }

  extend type Mutation {
    createHrShiftsAssignment(tenantId: String!, code: String!, name: String!): HrShiftsAssignment!
    deleteHrShiftsAssignment(id: ID!): Boolean!
  }
`;

export const HrShiftsAssignmentGqlResolvers = {
  Query: {
    getHrShiftsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
