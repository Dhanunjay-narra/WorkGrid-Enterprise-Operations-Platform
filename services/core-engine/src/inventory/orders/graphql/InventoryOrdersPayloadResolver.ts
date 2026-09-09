export const InventoryOrdersPayloadGqlTypeDefs = `
  type InventoryOrdersPayload {
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
    getInventoryOrdersPayload(id: ID!): InventoryOrdersPayload
    listInventoryOrdersPayloads(tenantId: String!, limit: Int): [InventoryOrdersPayload!]!
  }

  extend type Mutation {
    createInventoryOrdersPayload(tenantId: String!, code: String!, name: String!): InventoryOrdersPayload!
    deleteInventoryOrdersPayload(id: ID!): Boolean!
  }
`;

export const InventoryOrdersPayloadGqlResolvers = {
  Query: {
    getInventoryOrdersPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryOrdersPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
