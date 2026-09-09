export const IntWebhookSubscriptionTypeDefs = `
  type IntWebhookSubscription {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntWebhookSubscription(id: ID!): IntWebhookSubscription
    listIntWebhookSubscriptions(tenantId: String!): [IntWebhookSubscription!]!
  }
`;

export const IntWebhookSubscriptionResolvers = {
  Query: {
    getIntWebhookSubscription: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntWebhookSubscription", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntWebhookSubscriptions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntWebhookSubscription", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
