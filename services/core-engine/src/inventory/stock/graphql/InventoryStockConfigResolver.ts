export const InventoryStockConfigGqlTypeDefs = `
  type InventoryStockConfig {
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
    getInventoryStockConfig(id: ID!): InventoryStockConfig
    listInventoryStockConfigs(tenantId: String!, limit: Int): [InventoryStockConfig!]!
  }

  extend type Mutation {
    createInventoryStockConfig(tenantId: String!, code: String!, name: String!): InventoryStockConfig!
    deleteInventoryStockConfig(id: ID!): Boolean!
  }
`;

export const InventoryStockConfigGqlResolvers = {
  Query: {
    getInventoryStockConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
