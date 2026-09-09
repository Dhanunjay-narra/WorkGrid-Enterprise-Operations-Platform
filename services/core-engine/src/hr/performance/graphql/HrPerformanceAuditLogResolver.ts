export const HrPerformanceAuditLogGqlTypeDefs = `
  type HrPerformanceAuditLog {
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
    getHrPerformanceAuditLog(id: ID!): HrPerformanceAuditLog
    listHrPerformanceAuditLogs(tenantId: String!, limit: Int): [HrPerformanceAuditLog!]!
  }

  extend type Mutation {
    createHrPerformanceAuditLog(tenantId: String!, code: String!, name: String!): HrPerformanceAuditLog!
    deleteHrPerformanceAuditLog(id: ID!): Boolean!
  }
`;

export const HrPerformanceAuditLogGqlResolvers = {
  Query: {
    getHrPerformanceAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
