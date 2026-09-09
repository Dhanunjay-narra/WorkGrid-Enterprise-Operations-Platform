export const InventorySuppliersStateGqlTypeDefs = `
  type InventorySuppliersState {
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
    getInventorySuppliersState(id: ID!): InventorySuppliersState
    listInventorySuppliersStates(tenantId: String!, limit: Int): [InventorySuppliersState!]!
  }

  extend type Mutation {
    createInventorySuppliersState(tenantId: String!, code: String!, name: String!): InventorySuppliersState!
    deleteInventorySuppliersState(id: ID!): Boolean!
  }
`;

export const InventorySuppliersStateGqlResolvers = {
  Query: {
    getInventorySuppliersState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
