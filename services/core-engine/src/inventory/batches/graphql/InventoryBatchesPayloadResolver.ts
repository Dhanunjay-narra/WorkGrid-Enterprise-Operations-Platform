export const InventoryBatchesPayloadGqlTypeDefs = `
  type InventoryBatchesPayload {
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
    getInventoryBatchesPayload(id: ID!): InventoryBatchesPayload
    listInventoryBatchesPayloads(tenantId: String!, limit: Int): [InventoryBatchesPayload!]!
  }

  extend type Mutation {
    createInventoryBatchesPayload(tenantId: String!, code: String!, name: String!): InventoryBatchesPayload!
    deleteInventoryBatchesPayload(id: ID!): Boolean!
  }
`;

export const InventoryBatchesPayloadGqlResolvers = {
  Query: {
    getInventoryBatchesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
