export const InventorySkuConfigGqlTypeDefs = `
  type InventorySkuConfig {
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
    getInventorySkuConfig(id: ID!): InventorySkuConfig
    listInventorySkuConfigs(tenantId: String!, limit: Int): [InventorySkuConfig!]!
  }

  extend type Mutation {
    createInventorySkuConfig(tenantId: String!, code: String!, name: String!): InventorySkuConfig!
    deleteInventorySkuConfig(id: ID!): Boolean!
  }
`;

export const InventorySkuConfigGqlResolvers = {
  Query: {
    getInventorySkuConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
