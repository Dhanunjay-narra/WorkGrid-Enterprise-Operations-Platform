export const InventorySuppliersNodeGqlTypeDefs = `
  type InventorySuppliersNode {
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
    getInventorySuppliersNode(id: ID!): InventorySuppliersNode
    listInventorySuppliersNodes(tenantId: String!, limit: Int): [InventorySuppliersNode!]!
  }

  extend type Mutation {
    createInventorySuppliersNode(tenantId: String!, code: String!, name: String!): InventorySuppliersNode!
    deleteInventorySuppliersNode(id: ID!): Boolean!
  }
`;

export const InventorySuppliersNodeGqlResolvers = {
  Query: {
    getInventorySuppliersNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
