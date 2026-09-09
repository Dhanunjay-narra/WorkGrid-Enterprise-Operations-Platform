export const HrPayrollAuditLogGqlTypeDefs = `
  type HrPayrollAuditLog {
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
    getHrPayrollAuditLog(id: ID!): HrPayrollAuditLog
    listHrPayrollAuditLogs(tenantId: String!, limit: Int): [HrPayrollAuditLog!]!
  }

  extend type Mutation {
    createHrPayrollAuditLog(tenantId: String!, code: String!, name: String!): HrPayrollAuditLog!
    deleteHrPayrollAuditLog(id: ID!): Boolean!
  }
`;

export const HrPayrollAuditLogGqlResolvers = {
  Query: {
    getHrPayrollAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
