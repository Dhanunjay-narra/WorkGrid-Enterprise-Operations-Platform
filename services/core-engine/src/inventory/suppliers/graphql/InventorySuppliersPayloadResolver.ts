export const InventorySuppliersPayloadGqlTypeDefs = `
  type InventorySuppliersPayload {
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
    getInventorySuppliersPayload(id: ID!): InventorySuppliersPayload
    listInventorySuppliersPayloads(tenantId: String!, limit: Int): [InventorySuppliersPayload!]!
  }

  extend type Mutation {
    createInventorySuppliersPayload(tenantId: String!, code: String!, name: String!): InventorySuppliersPayload!
    deleteInventorySuppliersPayload(id: ID!): Boolean!
  }
`;

export const InventorySuppliersPayloadGqlResolvers = {
  Query: {
    getInventorySuppliersPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
