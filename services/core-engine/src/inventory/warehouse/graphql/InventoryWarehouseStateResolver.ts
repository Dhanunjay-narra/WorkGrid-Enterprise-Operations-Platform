export const InventoryWarehouseStateGqlTypeDefs = `
  type InventoryWarehouseState {
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
    getInventoryWarehouseState(id: ID!): InventoryWarehouseState
    listInventoryWarehouseStates(tenantId: String!, limit: Int): [InventoryWarehouseState!]!
  }

  extend type Mutation {
    createInventoryWarehouseState(tenantId: String!, code: String!, name: String!): InventoryWarehouseState!
    deleteInventoryWarehouseState(id: ID!): Boolean!
  }
`;

export const InventoryWarehouseStateGqlResolvers = {
  Query: {
    getInventoryWarehouseState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehouseState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
