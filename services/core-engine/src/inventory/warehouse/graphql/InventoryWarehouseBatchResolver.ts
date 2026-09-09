export const InventoryWarehouseBatchGqlTypeDefs = `
  type InventoryWarehouseBatch {
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
    getInventoryWarehouseBatch(id: ID!): InventoryWarehouseBatch
    listInventoryWarehouseBatchs(tenantId: String!, limit: Int): [InventoryWarehouseBatch!]!
  }

  extend type Mutation {
    createInventoryWarehouseBatch(tenantId: String!, code: String!, name: String!): InventoryWarehouseBatch!
    deleteInventoryWarehouseBatch(id: ID!): Boolean!
  }
`;

export const InventoryWarehouseBatchGqlResolvers = {
  Query: {
    getInventoryWarehouseBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehouseBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
