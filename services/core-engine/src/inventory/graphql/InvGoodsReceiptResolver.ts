export const InvGoodsReceiptTypeDefs = `
  type InvGoodsReceipt {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvGoodsReceipt(id: ID!): InvGoodsReceipt
    listInvGoodsReceipts(tenantId: String!): [InvGoodsReceipt!]!
  }
`;

export const InvGoodsReceiptResolvers = {
  Query: {
    getInvGoodsReceipt: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvGoodsReceipt", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvGoodsReceipts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvGoodsReceipt", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
