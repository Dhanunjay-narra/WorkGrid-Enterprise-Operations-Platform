export const InventoryStockMappingGqlTypeDefs = `
  type InventoryStockMapping {
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
    getInventoryStockMapping(id: ID!): InventoryStockMapping
    listInventoryStockMappings(tenantId: String!, limit: Int): [InventoryStockMapping!]!
  }

  extend type Mutation {
    createInventoryStockMapping(tenantId: String!, code: String!, name: String!): InventoryStockMapping!
    deleteInventoryStockMapping(id: ID!): Boolean!
  }
`;

export const InventoryStockMappingGqlResolvers = {
  Query: {
    getInventoryStockMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
