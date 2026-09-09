export const SupTicketMessageTypeDefs = `
  type SupTicketMessage {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupTicketMessage(id: ID!): SupTicketMessage
    listSupTicketMessages(tenantId: String!): [SupTicketMessage!]!
  }
`;

export const SupTicketMessageResolvers = {
  Query: {
    getSupTicketMessage: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupTicketMessage", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupTicketMessages: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupTicketMessage", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
