export const SupportCsatAuditLogGqlTypeDefs = `
  type SupportCsatAuditLog {
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
    getSupportCsatAuditLog(id: ID!): SupportCsatAuditLog
    listSupportCsatAuditLogs(tenantId: String!, limit: Int): [SupportCsatAuditLog!]!
  }

  extend type Mutation {
    createSupportCsatAuditLog(tenantId: String!, code: String!, name: String!): SupportCsatAuditLog!
    deleteSupportCsatAuditLog(id: ID!): Boolean!
  }
`;

export const SupportCsatAuditLogGqlResolvers = {
  Query: {
    getSupportCsatAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
