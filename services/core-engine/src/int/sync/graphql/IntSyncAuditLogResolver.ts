export const IntSyncAuditLogGqlTypeDefs = `
  type IntSyncAuditLog {
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
    getIntSyncAuditLog(id: ID!): IntSyncAuditLog
    listIntSyncAuditLogs(tenantId: String!, limit: Int): [IntSyncAuditLog!]!
  }

  extend type Mutation {
    createIntSyncAuditLog(tenantId: String!, code: String!, name: String!): IntSyncAuditLog!
    deleteIntSyncAuditLog(id: ID!): Boolean!
  }
`;

export const IntSyncAuditLogGqlResolvers = {
  Query: {
    getIntSyncAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
