export const InventoryWarehousePayloadGqlTypeDefs = `
  type InventoryWarehousePayload {
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
    getInventoryWarehousePayload(id: ID!): InventoryWarehousePayload
    listInventoryWarehousePayloads(tenantId: String!, limit: Int): [InventoryWarehousePayload!]!
  }

  extend type Mutation {
    createInventoryWarehousePayload(tenantId: String!, code: String!, name: String!): InventoryWarehousePayload!
    deleteInventoryWarehousePayload(id: ID!): Boolean!
  }
`;

export const InventoryWarehousePayloadGqlResolvers = {
  Query: {
    getInventoryWarehousePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehousePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
