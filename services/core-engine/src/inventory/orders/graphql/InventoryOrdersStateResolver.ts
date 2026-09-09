export const InventoryOrdersStateGqlTypeDefs = `
  type InventoryOrdersState {
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
    getInventoryOrdersState(id: ID!): InventoryOrdersState
    listInventoryOrdersStates(tenantId: String!, limit: Int): [InventoryOrdersState!]!
  }

  extend type Mutation {
    createInventoryOrdersState(tenantId: String!, code: String!, name: String!): InventoryOrdersState!
    deleteInventoryOrdersState(id: ID!): Boolean!
  }
`;

export const InventoryOrdersStateGqlResolvers = {
  Query: {
    getInventoryOrdersState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryOrdersState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
