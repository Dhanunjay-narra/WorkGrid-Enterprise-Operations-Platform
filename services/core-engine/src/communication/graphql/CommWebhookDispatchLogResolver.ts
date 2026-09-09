export const CommWebhookDispatchLogTypeDefs = `
  type CommWebhookDispatchLog {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommWebhookDispatchLog(id: ID!): CommWebhookDispatchLog
    listCommWebhookDispatchLogs(tenantId: String!): [CommWebhookDispatchLog!]!
  }
`;

export const CommWebhookDispatchLogResolvers = {
  Query: {
    getCommWebhookDispatchLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommWebhookDispatchLog", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommWebhookDispatchLogs: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommWebhookDispatchLog", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
