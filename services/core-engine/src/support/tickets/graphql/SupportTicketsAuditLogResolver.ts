export const SupportTicketsAuditLogGqlTypeDefs = `
  type SupportTicketsAuditLog {
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
    getSupportTicketsAuditLog(id: ID!): SupportTicketsAuditLog
    listSupportTicketsAuditLogs(tenantId: String!, limit: Int): [SupportTicketsAuditLog!]!
  }

  extend type Mutation {
    createSupportTicketsAuditLog(tenantId: String!, code: String!, name: String!): SupportTicketsAuditLog!
    deleteSupportTicketsAuditLog(id: ID!): Boolean!
  }
`;

export const SupportTicketsAuditLogGqlResolvers = {
  Query: {
    getSupportTicketsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
