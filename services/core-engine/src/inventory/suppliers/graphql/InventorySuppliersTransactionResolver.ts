export const InventorySuppliersTransactionGqlTypeDefs = `
  type InventorySuppliersTransaction {
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
    getInventorySuppliersTransaction(id: ID!): InventorySuppliersTransaction
    listInventorySuppliersTransactions(tenantId: String!, limit: Int): [InventorySuppliersTransaction!]!
  }

  extend type Mutation {
    createInventorySuppliersTransaction(tenantId: String!, code: String!, name: String!): InventorySuppliersTransaction!
    deleteInventorySuppliersTransaction(id: ID!): Boolean!
  }
`;

export const InventorySuppliersTransactionGqlResolvers = {
  Query: {
    getInventorySuppliersTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
