export const EvtAckReceiptTypeDefs = `
  type EvtAckReceipt {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getEvtAckReceipt(id: ID!): EvtAckReceipt
    listEvtAckReceipts(tenantId: String!): [EvtAckReceipt!]!
  }
`;

export const EvtAckReceiptResolvers = {
  Query: {
    getEvtAckReceipt: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "EvtAckReceipt", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listEvtAckReceipts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "EvtAckReceipt", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
