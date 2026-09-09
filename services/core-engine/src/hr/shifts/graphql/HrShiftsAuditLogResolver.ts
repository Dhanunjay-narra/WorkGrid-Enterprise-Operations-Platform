export const HrShiftsAuditLogGqlTypeDefs = `
  type HrShiftsAuditLog {
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
    getHrShiftsAuditLog(id: ID!): HrShiftsAuditLog
    listHrShiftsAuditLogs(tenantId: String!, limit: Int): [HrShiftsAuditLog!]!
  }

  extend type Mutation {
    createHrShiftsAuditLog(tenantId: String!, code: String!, name: String!): HrShiftsAuditLog!
    deleteHrShiftsAuditLog(id: ID!): Boolean!
  }
`;

export const HrShiftsAuditLogGqlResolvers = {
  Query: {
    getHrShiftsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
