export const InventoryStockStateGqlTypeDefs = `
  type InventoryStockState {
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
    getInventoryStockState(id: ID!): InventoryStockState
    listInventoryStockStates(tenantId: String!, limit: Int): [InventoryStockState!]!
  }

  extend type Mutation {
    createInventoryStockState(tenantId: String!, code: String!, name: String!): InventoryStockState!
    deleteInventoryStockState(id: ID!): Boolean!
  }
`;

export const InventoryStockStateGqlResolvers = {
  Query: {
    getInventoryStockState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
