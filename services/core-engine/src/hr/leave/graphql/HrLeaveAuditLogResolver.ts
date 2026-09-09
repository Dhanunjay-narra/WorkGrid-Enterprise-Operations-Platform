export const HrLeaveAuditLogGqlTypeDefs = `
  type HrLeaveAuditLog {
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
    getHrLeaveAuditLog(id: ID!): HrLeaveAuditLog
    listHrLeaveAuditLogs(tenantId: String!, limit: Int): [HrLeaveAuditLog!]!
  }

  extend type Mutation {
    createHrLeaveAuditLog(tenantId: String!, code: String!, name: String!): HrLeaveAuditLog!
    deleteHrLeaveAuditLog(id: ID!): Boolean!
  }
`;

export const HrLeaveAuditLogGqlResolvers = {
  Query: {
    getHrLeaveAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
