export const InventoryWarehouseThresholdGqlTypeDefs = `
  type InventoryWarehouseThreshold {
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
    getInventoryWarehouseThreshold(id: ID!): InventoryWarehouseThreshold
    listInventoryWarehouseThresholds(tenantId: String!, limit: Int): [InventoryWarehouseThreshold!]!
  }

  extend type Mutation {
    createInventoryWarehouseThreshold(tenantId: String!, code: String!, name: String!): InventoryWarehouseThreshold!
    deleteInventoryWarehouseThreshold(id: ID!): Boolean!
  }
`;

export const InventoryWarehouseThresholdGqlResolvers = {
  Query: {
    getInventoryWarehouseThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehouseThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
