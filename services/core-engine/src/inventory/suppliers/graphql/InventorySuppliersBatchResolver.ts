export const InventorySuppliersBatchGqlTypeDefs = `
  type InventorySuppliersBatch {
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
    getInventorySuppliersBatch(id: ID!): InventorySuppliersBatch
    listInventorySuppliersBatchs(tenantId: String!, limit: Int): [InventorySuppliersBatch!]!
  }

  extend type Mutation {
    createInventorySuppliersBatch(tenantId: String!, code: String!, name: String!): InventorySuppliersBatch!
    deleteInventorySuppliersBatch(id: ID!): Boolean!
  }
`;

export const InventorySuppliersBatchGqlResolvers = {
  Query: {
    getInventorySuppliersBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
