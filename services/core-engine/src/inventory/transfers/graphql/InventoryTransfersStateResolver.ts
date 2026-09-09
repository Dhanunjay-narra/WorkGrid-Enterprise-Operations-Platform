export const InventoryTransfersStateGqlTypeDefs = `
  type InventoryTransfersState {
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
    getInventoryTransfersState(id: ID!): InventoryTransfersState
    listInventoryTransfersStates(tenantId: String!, limit: Int): [InventoryTransfersState!]!
  }

  extend type Mutation {
    createInventoryTransfersState(tenantId: String!, code: String!, name: String!): InventoryTransfersState!
    deleteInventoryTransfersState(id: ID!): Boolean!
  }
`;

export const InventoryTransfersStateGqlResolvers = {
  Query: {
    getInventoryTransfersState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryTransfersState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
