export const InventoryStockNodeGqlTypeDefs = `
  type InventoryStockNode {
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
    getInventoryStockNode(id: ID!): InventoryStockNode
    listInventoryStockNodes(tenantId: String!, limit: Int): [InventoryStockNode!]!
  }

  extend type Mutation {
    createInventoryStockNode(tenantId: String!, code: String!, name: String!): InventoryStockNode!
    deleteInventoryStockNode(id: ID!): Boolean!
  }
`;

export const InventoryStockNodeGqlResolvers = {
  Query: {
    getInventoryStockNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
