export const IntWebhooksAuditLogGqlTypeDefs = `
  type IntWebhooksAuditLog {
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
    getIntWebhooksAuditLog(id: ID!): IntWebhooksAuditLog
    listIntWebhooksAuditLogs(tenantId: String!, limit: Int): [IntWebhooksAuditLog!]!
  }

  extend type Mutation {
    createIntWebhooksAuditLog(tenantId: String!, code: String!, name: String!): IntWebhooksAuditLog!
    deleteIntWebhooksAuditLog(id: ID!): Boolean!
  }
`;

export const IntWebhooksAuditLogGqlResolvers = {
  Query: {
    getIntWebhooksAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
