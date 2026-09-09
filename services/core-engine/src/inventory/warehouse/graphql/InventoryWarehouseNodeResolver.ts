export const InventoryWarehouseNodeGqlTypeDefs = `
  type InventoryWarehouseNode {
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
    getInventoryWarehouseNode(id: ID!): InventoryWarehouseNode
    listInventoryWarehouseNodes(tenantId: String!, limit: Int): [InventoryWarehouseNode!]!
  }

  extend type Mutation {
    createInventoryWarehouseNode(tenantId: String!, code: String!, name: String!): InventoryWarehouseNode!
    deleteInventoryWarehouseNode(id: ID!): Boolean!
  }
`;

export const InventoryWarehouseNodeGqlResolvers = {
  Query: {
    getInventoryWarehouseNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehouseNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
