export const InvWarehouseTypeDefs = `
  type InvWarehouse {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvWarehouse(id: ID!): InvWarehouse
    listInvWarehouses(tenantId: String!): [InvWarehouse!]!
  }
`;

export const InvWarehouseResolvers = {
  Query: {
    getInvWarehouse: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvWarehouse", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvWarehouses: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvWarehouse", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
