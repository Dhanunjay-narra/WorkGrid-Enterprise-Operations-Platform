export const HrAttendanceSessionGqlTypeDefs = `
  type HrAttendanceSession {
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
    getHrAttendanceSession(id: ID!): HrAttendanceSession
    listHrAttendanceSessions(tenantId: String!, limit: Int): [HrAttendanceSession!]!
  }

  extend type Mutation {
    createHrAttendanceSession(tenantId: String!, code: String!, name: String!): HrAttendanceSession!
    deleteHrAttendanceSession(id: ID!): Boolean!
  }
`;

export const HrAttendanceSessionGqlResolvers = {
  Query: {
    getHrAttendanceSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
