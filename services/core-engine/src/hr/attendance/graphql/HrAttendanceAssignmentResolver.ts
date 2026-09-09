export const HrAttendanceAssignmentGqlTypeDefs = `
  type HrAttendanceAssignment {
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
    getHrAttendanceAssignment(id: ID!): HrAttendanceAssignment
    listHrAttendanceAssignments(tenantId: String!, limit: Int): [HrAttendanceAssignment!]!
  }

  extend type Mutation {
    createHrAttendanceAssignment(tenantId: String!, code: String!, name: String!): HrAttendanceAssignment!
    deleteHrAttendanceAssignment(id: ID!): Boolean!
  }
`;

export const HrAttendanceAssignmentGqlResolvers = {
  Query: {
    getHrAttendanceAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
