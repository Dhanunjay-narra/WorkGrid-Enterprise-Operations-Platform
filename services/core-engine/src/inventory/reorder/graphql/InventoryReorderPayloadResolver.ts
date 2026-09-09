export const InventoryReorderPayloadGqlTypeDefs = `
  type InventoryReorderPayload {
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
    getInventoryReorderPayload(id: ID!): InventoryReorderPayload
    listInventoryReorderPayloads(tenantId: String!, limit: Int): [InventoryReorderPayload!]!
  }

  extend type Mutation {
    createInventoryReorderPayload(tenantId: String!, code: String!, name: String!): InventoryReorderPayload!
    deleteInventoryReorderPayload(id: ID!): Boolean!
  }
`;

export const InventoryReorderPayloadGqlResolvers = {
  Query: {
    getInventoryReorderPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryReorderPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
