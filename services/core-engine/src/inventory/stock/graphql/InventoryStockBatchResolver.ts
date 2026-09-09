export const InventoryStockBatchGqlTypeDefs = `
  type InventoryStockBatch {
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
    getInventoryStockBatch(id: ID!): InventoryStockBatch
    listInventoryStockBatchs(tenantId: String!, limit: Int): [InventoryStockBatch!]!
  }

  extend type Mutation {
    createInventoryStockBatch(tenantId: String!, code: String!, name: String!): InventoryStockBatch!
    deleteInventoryStockBatch(id: ID!): Boolean!
  }
`;

export const InventoryStockBatchGqlResolvers = {
  Query: {
    getInventoryStockBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
