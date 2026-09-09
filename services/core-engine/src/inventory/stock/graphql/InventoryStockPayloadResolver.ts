export const InventoryStockPayloadGqlTypeDefs = `
  type InventoryStockPayload {
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
    getInventoryStockPayload(id: ID!): InventoryStockPayload
    listInventoryStockPayloads(tenantId: String!, limit: Int): [InventoryStockPayload!]!
  }

  extend type Mutation {
    createInventoryStockPayload(tenantId: String!, code: String!, name: String!): InventoryStockPayload!
    deleteInventoryStockPayload(id: ID!): Boolean!
  }
`;

export const InventoryStockPayloadGqlResolvers = {
  Query: {
    getInventoryStockPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
