export const InvTransferOrderTypeDefs = `
  type InvTransferOrder {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvTransferOrder(id: ID!): InvTransferOrder
    listInvTransferOrders(tenantId: String!): [InvTransferOrder!]!
  }
`;

export const InvTransferOrderResolvers = {
  Query: {
    getInvTransferOrder: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvTransferOrder", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvTransferOrders: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvTransferOrder", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
