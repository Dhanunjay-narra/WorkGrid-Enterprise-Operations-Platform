export const InventorySkuMappingGqlTypeDefs = `
  type InventorySkuMapping {
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
    getInventorySkuMapping(id: ID!): InventorySkuMapping
    listInventorySkuMappings(tenantId: String!, limit: Int): [InventorySkuMapping!]!
  }

  extend type Mutation {
    createInventorySkuMapping(tenantId: String!, code: String!, name: String!): InventorySkuMapping!
    deleteInventorySkuMapping(id: ID!): Boolean!
  }
`;

export const InventorySkuMappingGqlResolvers = {
  Query: {
    getInventorySkuMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
