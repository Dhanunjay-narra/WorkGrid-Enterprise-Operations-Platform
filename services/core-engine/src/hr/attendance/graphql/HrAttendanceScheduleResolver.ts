export const HrAttendanceScheduleGqlTypeDefs = `
  type HrAttendanceSchedule {
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
    getHrAttendanceSchedule(id: ID!): HrAttendanceSchedule
    listHrAttendanceSchedules(tenantId: String!, limit: Int): [HrAttendanceSchedule!]!
  }

  extend type Mutation {
    createHrAttendanceSchedule(tenantId: String!, code: String!, name: String!): HrAttendanceSchedule!
    deleteHrAttendanceSchedule(id: ID!): Boolean!
  }
`;

export const HrAttendanceScheduleGqlResolvers = {
  Query: {
    getHrAttendanceSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
