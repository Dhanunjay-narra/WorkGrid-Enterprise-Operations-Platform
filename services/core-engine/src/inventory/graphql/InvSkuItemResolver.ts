export const InvSkuItemTypeDefs = `
  type InvSkuItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvSkuItem(id: ID!): InvSkuItem
    listInvSkuItems(tenantId: String!): [InvSkuItem!]!
  }
`;

export const InvSkuItemResolvers = {
  Query: {
    getInvSkuItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvSkuItem", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvSkuItems: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvSkuItem", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
