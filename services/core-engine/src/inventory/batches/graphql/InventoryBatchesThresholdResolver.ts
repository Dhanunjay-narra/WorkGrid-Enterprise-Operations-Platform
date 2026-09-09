export const InventoryBatchesThresholdGqlTypeDefs = `
  type InventoryBatchesThreshold {
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
    getInventoryBatchesThreshold(id: ID!): InventoryBatchesThreshold
    listInventoryBatchesThresholds(tenantId: String!, limit: Int): [InventoryBatchesThreshold!]!
  }

  extend type Mutation {
    createInventoryBatchesThreshold(tenantId: String!, code: String!, name: String!): InventoryBatchesThreshold!
    deleteInventoryBatchesThreshold(id: ID!): Boolean!
  }
`;

export const InventoryBatchesThresholdGqlResolvers = {
  Query: {
    getInventoryBatchesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
