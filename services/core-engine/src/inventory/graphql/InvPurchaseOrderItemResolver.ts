export const InvPurchaseOrderItemTypeDefs = `
  type InvPurchaseOrderItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvPurchaseOrderItem(id: ID!): InvPurchaseOrderItem
    listInvPurchaseOrderItems(tenantId: String!): [InvPurchaseOrderItem!]!
  }
`;

export const InvPurchaseOrderItemResolvers = {
  Query: {
    getInvPurchaseOrderItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvPurchaseOrderItem", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvPurchaseOrderItems: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvPurchaseOrderItem", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
