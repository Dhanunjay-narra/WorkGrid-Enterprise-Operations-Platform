export const EvtEventSubscriptionTypeDefs = `
  type EvtEventSubscription {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtEventSubscription(id: ID!): EvtEventSubscription
    listEvtEventSubscriptions(tenantId: String!): [EvtEventSubscription!]!
  }
`;

export const EvtEventSubscriptionResolvers = {
  Query: {
    getEvtEventSubscription: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtEventSubscription", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtEventSubscriptions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtEventSubscription", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
