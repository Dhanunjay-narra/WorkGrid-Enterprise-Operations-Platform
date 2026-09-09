export const InvPurchaseOrderTypeDefs = `
  type InvPurchaseOrder {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvPurchaseOrder(id: ID!): InvPurchaseOrder
    listInvPurchaseOrders(tenantId: String!): [InvPurchaseOrder!]!
  }
`;

export const InvPurchaseOrderResolvers = {
  Query: {
    getInvPurchaseOrder: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvPurchaseOrder", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvPurchaseOrders: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvPurchaseOrder", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
