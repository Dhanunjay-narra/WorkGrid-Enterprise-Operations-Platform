export const InventoryWarehouseEntryGqlTypeDefs = `
  type InventoryWarehouseEntry {
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
    getInventoryWarehouseEntry(id: ID!): InventoryWarehouseEntry
    listInventoryWarehouseEntrys(tenantId: String!, limit: Int): [InventoryWarehouseEntry!]!
  }

  extend type Mutation {
    createInventoryWarehouseEntry(tenantId: String!, code: String!, name: String!): InventoryWarehouseEntry!
    deleteInventoryWarehouseEntry(id: ID!): Boolean!
  }
`;

export const InventoryWarehouseEntryGqlResolvers = {
  Query: {
    getInventoryWarehouseEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehouseEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
