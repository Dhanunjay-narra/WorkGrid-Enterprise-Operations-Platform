export const InventoryOrdersNodeGqlTypeDefs = `
  type InventoryOrdersNode {
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
    getInventoryOrdersNode(id: ID!): InventoryOrdersNode
    listInventoryOrdersNodes(tenantId: String!, limit: Int): [InventoryOrdersNode!]!
  }

  extend type Mutation {
    createInventoryOrdersNode(tenantId: String!, code: String!, name: String!): InventoryOrdersNode!
    deleteInventoryOrdersNode(id: ID!): Boolean!
  }
`;

export const InventoryOrdersNodeGqlResolvers = {
  Query: {
    getInventoryOrdersNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryOrdersNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
