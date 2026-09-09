export const InventoryBatchesNodeGqlTypeDefs = `
  type InventoryBatchesNode {
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
    getInventoryBatchesNode(id: ID!): InventoryBatchesNode
    listInventoryBatchesNodes(tenantId: String!, limit: Int): [InventoryBatchesNode!]!
  }

  extend type Mutation {
    createInventoryBatchesNode(tenantId: String!, code: String!, name: String!): InventoryBatchesNode!
    deleteInventoryBatchesNode(id: ID!): Boolean!
  }
`;

export const InventoryBatchesNodeGqlResolvers = {
  Query: {
    getInventoryBatchesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
