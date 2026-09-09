export const InventorySuppliersEntryGqlTypeDefs = `
  type InventorySuppliersEntry {
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
    getInventorySuppliersEntry(id: ID!): InventorySuppliersEntry
    listInventorySuppliersEntrys(tenantId: String!, limit: Int): [InventorySuppliersEntry!]!
  }

  extend type Mutation {
    createInventorySuppliersEntry(tenantId: String!, code: String!, name: String!): InventorySuppliersEntry!
    deleteInventorySuppliersEntry(id: ID!): Boolean!
  }
`;

export const InventorySuppliersEntryGqlResolvers = {
  Query: {
    getInventorySuppliersEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
