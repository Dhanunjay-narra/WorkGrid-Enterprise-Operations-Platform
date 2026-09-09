export const InventoryBatchesMappingGqlTypeDefs = `
  type InventoryBatchesMapping {
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
    getInventoryBatchesMapping(id: ID!): InventoryBatchesMapping
    listInventoryBatchesMappings(tenantId: String!, limit: Int): [InventoryBatchesMapping!]!
  }

  extend type Mutation {
    createInventoryBatchesMapping(tenantId: String!, code: String!, name: String!): InventoryBatchesMapping!
    deleteInventoryBatchesMapping(id: ID!): Boolean!
  }
`;

export const InventoryBatchesMappingGqlResolvers = {
  Query: {
    getInventoryBatchesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
