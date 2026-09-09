export const InventoryBatchesStateGqlTypeDefs = `
  type InventoryBatchesState {
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
    getInventoryBatchesState(id: ID!): InventoryBatchesState
    listInventoryBatchesStates(tenantId: String!, limit: Int): [InventoryBatchesState!]!
  }

  extend type Mutation {
    createInventoryBatchesState(tenantId: String!, code: String!, name: String!): InventoryBatchesState!
    deleteInventoryBatchesState(id: ID!): Boolean!
  }
`;

export const InventoryBatchesStateGqlResolvers = {
  Query: {
    getInventoryBatchesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
