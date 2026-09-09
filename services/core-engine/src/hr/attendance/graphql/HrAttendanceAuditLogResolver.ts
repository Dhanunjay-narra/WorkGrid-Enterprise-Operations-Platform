export const HrAttendanceAuditLogGqlTypeDefs = `
  type HrAttendanceAuditLog {
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
    getHrAttendanceAuditLog(id: ID!): HrAttendanceAuditLog
    listHrAttendanceAuditLogs(tenantId: String!, limit: Int): [HrAttendanceAuditLog!]!
  }

  extend type Mutation {
    createHrAttendanceAuditLog(tenantId: String!, code: String!, name: String!): HrAttendanceAuditLog!
    deleteHrAttendanceAuditLog(id: ID!): Boolean!
  }
`;

export const HrAttendanceAuditLogGqlResolvers = {
  Query: {
    getHrAttendanceAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
