export const InventorySkuPayloadGqlTypeDefs = `
  type InventorySkuPayload {
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
    getInventorySkuPayload(id: ID!): InventorySkuPayload
    listInventorySkuPayloads(tenantId: String!, limit: Int): [InventorySkuPayload!]!
  }

  extend type Mutation {
    createInventorySkuPayload(tenantId: String!, code: String!, name: String!): InventorySkuPayload!
    deleteInventorySkuPayload(id: ID!): Boolean!
  }
`;

export const InventorySkuPayloadGqlResolvers = {
  Query: {
    getInventorySkuPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
