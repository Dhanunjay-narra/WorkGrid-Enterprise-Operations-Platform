export const EvtOutboxMessageTypeDefs = `
  type EvtOutboxMessage {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtOutboxMessage(id: ID!): EvtOutboxMessage
    listEvtOutboxMessages(tenantId: String!): [EvtOutboxMessage!]!
  }
`;

export const EvtOutboxMessageResolvers = {
  Query: {
    getEvtOutboxMessage: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtOutboxMessage", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtOutboxMessages: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtOutboxMessage", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
