export const IntWebhookEventLogTypeDefs = `
  type IntWebhookEventLog {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntWebhookEventLog(id: ID!): IntWebhookEventLog
    listIntWebhookEventLogs(tenantId: String!): [IntWebhookEventLog!]!
  }
`;

export const IntWebhookEventLogResolvers = {
  Query: {
    getIntWebhookEventLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntWebhookEventLog", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntWebhookEventLogs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntWebhookEventLog", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
