export const HrAttendanceMappingGqlTypeDefs = `
  type HrAttendanceMapping {
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
    getHrAttendanceMapping(id: ID!): HrAttendanceMapping
    listHrAttendanceMappings(tenantId: String!, limit: Int): [HrAttendanceMapping!]!
  }

  extend type Mutation {
    createHrAttendanceMapping(tenantId: String!, code: String!, name: String!): HrAttendanceMapping!
    deleteHrAttendanceMapping(id: ID!): Boolean!
  }
`;

export const HrAttendanceMappingGqlResolvers = {
  Query: {
    getHrAttendanceMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
