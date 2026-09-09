export const InventorySkuNodeGqlTypeDefs = `
  type InventorySkuNode {
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
    getInventorySkuNode(id: ID!): InventorySkuNode
    listInventorySkuNodes(tenantId: String!, limit: Int): [InventorySkuNode!]!
  }

  extend type Mutation {
    createInventorySkuNode(tenantId: String!, code: String!, name: String!): InventorySkuNode!
    deleteInventorySkuNode(id: ID!): Boolean!
  }
`;

export const InventorySkuNodeGqlResolvers = {
  Query: {
    getInventorySkuNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
