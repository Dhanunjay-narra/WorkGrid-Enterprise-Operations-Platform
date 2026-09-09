export const HrAttendanceRecordGqlTypeDefs = `
  type HrAttendanceRecord {
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
    getHrAttendanceRecord(id: ID!): HrAttendanceRecord
    listHrAttendanceRecords(tenantId: String!, limit: Int): [HrAttendanceRecord!]!
  }

  extend type Mutation {
    createHrAttendanceRecord(tenantId: String!, code: String!, name: String!): HrAttendanceRecord!
    deleteHrAttendanceRecord(id: ID!): Boolean!
  }
`;

export const HrAttendanceRecordGqlResolvers = {
  Query: {
    getHrAttendanceRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
