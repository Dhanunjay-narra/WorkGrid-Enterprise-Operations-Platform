export const InventoryStockItemGqlTypeDefs = `
  type InventoryStockItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getInventoryStockItem(id: ID!): InventoryStockItem
    listInventoryStockItems(tenantId: String!, limit: Int): [InventoryStockItem!]!
  }

  extend type Mutation {
    createInventoryStockItem(tenantId: String!, code: String!, name: String!): InventoryStockItem!
    deleteInventoryStockItem(id: ID!): Boolean!
  }
`;

export const InventoryStockItemGqlResolvers = {
  Query: {
    getInventoryStockItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
