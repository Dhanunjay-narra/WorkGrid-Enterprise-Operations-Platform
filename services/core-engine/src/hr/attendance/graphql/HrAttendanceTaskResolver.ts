export const HrAttendanceTaskGqlTypeDefs = `
  type HrAttendanceTask {
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
    getHrAttendanceTask(id: ID!): HrAttendanceTask
    listHrAttendanceTasks(tenantId: String!, limit: Int): [HrAttendanceTask!]!
  }

  extend type Mutation {
    createHrAttendanceTask(tenantId: String!, code: String!, name: String!): HrAttendanceTask!
    deleteHrAttendanceTask(id: ID!): Boolean!
  }
`;

export const HrAttendanceTaskGqlResolvers = {
  Query: {
    getHrAttendanceTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
