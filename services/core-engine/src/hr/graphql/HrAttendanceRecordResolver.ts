export const HrAttendanceRecordTypeDefs = `
  type HrAttendanceRecord {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrAttendanceRecord(id: ID!): HrAttendanceRecord
    listHrAttendanceRecords(tenantId: String!): [HrAttendanceRecord!]!
  }
`;

export const HrAttendanceRecordResolvers = {
  Query: {
    getHrAttendanceRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrAttendanceRecord", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrAttendanceRecords: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrAttendanceRecord", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
