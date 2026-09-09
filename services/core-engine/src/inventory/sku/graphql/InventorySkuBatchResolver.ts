export const InventorySkuBatchGqlTypeDefs = `
  type InventorySkuBatch {
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
    getInventorySkuBatch(id: ID!): InventorySkuBatch
    listInventorySkuBatchs(tenantId: String!, limit: Int): [InventorySkuBatch!]!
  }

  extend type Mutation {
    createInventorySkuBatch(tenantId: String!, code: String!, name: String!): InventorySkuBatch!
    deleteInventorySkuBatch(id: ID!): Boolean!
  }
`;

export const InventorySkuBatchGqlResolvers = {
  Query: {
    getInventorySkuBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
