export const InventorySkuStateGqlTypeDefs = `
  type InventorySkuState {
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
    getInventorySkuState(id: ID!): InventorySkuState
    listInventorySkuStates(tenantId: String!, limit: Int): [InventorySkuState!]!
  }

  extend type Mutation {
    createInventorySkuState(tenantId: String!, code: String!, name: String!): InventorySkuState!
    deleteInventorySkuState(id: ID!): Boolean!
  }
`;

export const InventorySkuStateGqlResolvers = {
  Query: {
    getInventorySkuState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
